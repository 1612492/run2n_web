import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Contract } from '@ethersproject/contracts';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { parseEther } from '@ethersproject/units';
import NumberFormat from 'react-number-format';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { serializeError } from 'eth-rpc-errors';

import MintPass from '../abis/MintPass.json';
import useLocalStorage from '../hooks/useLocalStorage';
import mintPassImage from '../images/mint-pass.png';
import chevronLeftIcon from '../images/chevron-left.svg';
import chevronRightIcon from '../images/chevron-right.svg';
import userIcon from '../images/user.svg';
import walletIcon from '../images/wallet.svg';
import copyIcon from '../images/copy.svg';
import classname from '../utils/classname';
import {
  convertHexStringToNumber,
  convertHexStringToString,
  converNumberToHexString,
  formatDate,
  shortenAccount,
  shortenBalance,
  shortenHash,
  convertBigNumberToString,
} from '../utils/format';
import { hasProvider, getProvider } from '../utils/rpc';
import { getMint, getReferCode, postReferCode } from '../utils/rest';

const CONTRACT_ADDRESS = '0x393D9F15E29d52A9ec6B909F8e670E74B82D3001';
const endTime = new Date(Date.UTC(2022, 8, 6, 10, 0, 0));
const currentTime = new Date();

const limit = 10;

const chain = {
  chainId: 56,
  chainName: 'Binance Smart Chain Mainnet',
  nativeCurrency: {
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: ['https://bsc-dataseed1.binance.org'],
  blockExplorerUrls: ['https://bscscan.com'],
};

const schema = yup.object({
  amount: yup
    .number()
    .moreThan(0, 'Amount must greater than 0')
    .integer('Amount must be an integer (1 Mint Pass, 2 Mint Pass, 3 Mint Pass, ...)')
    .required('Amount is required'),
  refferCode: yup.string(),
});

function formatTime(time) {
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;

  var hours = Math.floor((time % _day) / _hour);
  var minutes = Math.floor((time % _hour) / _minute);
  var seconds = Math.floor((time % _minute) / _second);

  return (
    String(hours).padStart(2, '0') +
    ':' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0')
  );
}

function Mint() {
  const [histories, setHistories] = useState(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [isSupported, setIsSupported] = useState(false);
  const [price, setPrice] = useLocalStorage('price', null);
  const [currentMints, setCurrentMintes] = useLocalStorage('currentMints', null);
  const [maxMints, setMaxMints] = useLocalStorage('maxMints', null);
  const [referCode, setReferCode] = useState(null);
  const [copied, setCopied] = useState(false);
  const [remainTime, setRemainTime] = useState(
    endTime - currentTime > 0 ? endTime - currentTime : 0
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function getMintInfos() {
    try {
      const provider = new JsonRpcProvider(chain.rpcUrls[0]);
      const contract = new Contract(CONTRACT_ADDRESS, MintPass, provider);

      Promise.all([contract.price(), contract.currentNbBox(), contract.maximumMintPass()]).then(
        ([rawPrice, rawCurrentMints, rawMaxMints]) => {
          const newPrice = convertBigNumberToString(rawPrice);
          if (newPrice !== price) setPrice(newPrice);

          const newCurrentMints = rawCurrentMints.toNumber();
          if (newCurrentMints !== currentMints) setCurrentMintes(newCurrentMints);

          const newMaxMints = rawMaxMints.toNumber();
          if (newMaxMints !== maxMints) setMaxMints(newMaxMints);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  function changeChain() {
    const hexChainId = converNumberToHexString(chain.chainId);

    provider
      .request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexChainId }],
      })
      .catch((error) => {
        if (error.code === 4902) {
          provider
            .request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  ...chain,
                  chainId: hexChainId,
                },
              ],
            })
            .catch((error) => {
              toast.error(error.message);
              console.error(error);
            });
        } else {
          toast.error(error.message);
          console.error(error);
        }
      });
  }

  async function onSubmit({ amount, refferCode }) {
    try {
      const web3Provider = new Web3Provider(provider);
      const signer = web3Provider.getSigner(account);
      const contract = new Contract(CONTRACT_ADDRESS, MintPass, signer);
      const priceInEther = parseEther(price);
      const amountNumber = Number(amount);

      const tx = await contract.orderMintPass(amountNumber, {
        value: priceInEther.mul(amountNumber),
      });

      if (referCode) {
        await postReferCode({
          address: account,
          code: refferCode,
          txHash: tx.hash,
          amount: amountNumber,
        });
      }

      toast.success(
        <p>
          You have submited a transaction.
          <br />
          <a rel="noreferrer" target="_blank" href={`${chain.blockExplorerUrls[0]}/tx/${tx.hash}`}>
            View it on block explorer
          </a>
        </p>
      );
    } catch (error) {
      const serializedError = serializeError(error);
      if (serializedError?.data?.originalError?.reason) {
        toast.error(serializedError.data.originalError.reason);
      } else {
        toast.error(serializedError.message);
      }
    }
  }

  const connect = useCallback(() => {
    if (!hasProvider()) {
      toast.error('No Metamask extenstion installed');
      return;
    }

    const provider = getProvider();
    setProvider(provider);

    provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          provider.request({ method: 'eth_chainId' }).then((chainId) => {
            const convertedChainId = convertHexStringToNumber(chainId);
            if (convertedChainId === chain.chainId) {
              setIsSupported(true);
            } else {
              setIsSupported(false);
            }
          });
          provider
            .request({
              method: 'eth_getBalance',
              params: [accounts[0], 'latest'],
            })
            .then((balance) => setBalance(convertHexStringToString(balance)));
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (hasProvider()) {
      const provider = getProvider();
      setProvider(provider);
      provider.request({ method: 'eth_accounts' }).then((accounts) => {
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          provider.request({ method: 'eth_chainId' }).then((chainId) => {
            const convertedChainId = convertHexStringToNumber(chainId);
            if (convertedChainId === chain.chainId) {
              setIsSupported(true);
            } else {
              setIsSupported(false);
            }
          });
          provider
            .request({
              method: 'eth_getBalance',
              params: [accounts[0], 'latest'],
            })
            .then((balance) => setBalance(convertHexStringToString(balance)));
        }
      });
    }
  }, []);

  useEffect(() => {
    getMint()
      .then(({ data }) => {
        setHistories(data.data.mints);
        setPages(Math.ceil(data.data.mints.length / limit));
      })
      .catch((error) => console.error(error));
    getMintInfos();
  }, []);

  useEffect(() => {
    if (remainTime > 0) {
      let intervalId = setInterval(() => {
        setRemainTime((prevState) => prevState - 1000);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [remainTime]);

  useEffect(() => {
    if (account) {
      getReferCode({ address: account }).then(({ data }) => {
        setReferCode(data.data.refer_code);
      });
    }
  }, [account]);

  useEffect(() => {
    if (isConnected && account && provider) {
      function onChainChanged(chainId) {
        const convertedChainId = convertHexStringToNumber(chainId);
        if (convertedChainId === chain.chainId) {
          setIsSupported(true);
        } else {
          setIsSupported(false);
        }
        provider
          .request({
            method: 'eth_getBalance',
            params: [account, 'latest'],
          })
          .then((balance) => setBalance(convertHexStringToString(balance)));
      }

      function onAccountsChanged(accounts) {
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          provider
            .request({
              method: 'eth_getBalance',
              params: [accounts[0], 'latest'],
            })
            .then((balance) => setBalance(convertHexStringToString(balance)));
        }
      }

      provider.on('chainChanged', onChainChanged);
      provider.on('accountsChanged', onAccountsChanged);

      return () => {
        provider.removeListener('chainChanged', onChainChanged);
        provider.removeListener('accountsChanged', onAccountsChanged);
      };
    }
  }, [account, isConnected, provider]);

  return (
    <section className="mint">
      <section className="mint__header">
        {isConnected && account && balance ? (
          <>
            {referCode ? (
              <article className="mint__header-item">
                <p>
                  Your refer code: <strong>{referCode}</strong>
                </p>
              </article>
            ) : null}
            {isSupported ? (
              <article className="mint__header-item">
                <img src={walletIcon} className="mint__header-icon" alt="balance" />
                <p>{shortenBalance(balance)} BNB</p>
              </article>
            ) : null}
            <article className="mint__header-item">
              <img src={userIcon} className="mint__header-icon" alt="account" />
              <p>{shortenAccount(account, 10, 6)}</p>
              <button onClick={() => copy()} className="copy-button">
                <img src={copyIcon} alt="copy" className="copy-icon" />
                {copied ? <p className="copied-text">Copied</p> : null}
              </button>
            </article>
          </>
        ) : null}
      </section>
      <img src={mintPassImage} alt="mint pass" className="mint__image" />
      <div className="mint__infos">
        {price ? (
          <p>
            Price: <strong>{price}</strong> BNB
          </p>
        ) : null}
        {maxMints ? (
          <p>
            Max: <strong>{maxMints}</strong> items
          </p>
        ) : null}
        {currentMints ? (
          <p>
            Sold: <strong>{currentMints}</strong> items
          </p>
        ) : null}
        {currentMints && maxMints ? (
          <p>
            Remain: <strong>{maxMints - currentMints}</strong> items
          </p>
        ) : null}
        {remainTime || remainTime > 0 ? (
          <p>
            Time remain: <strong>{formatTime(remainTime)}</strong>
          </p>
        ) : null}
      </div>

      {isConnected && provider ? (
        isSupported ? (
          <form className="mint__form">
            <label
              htmlFor="amount"
              className={classname('form__label', errors.amount && 'form__label--error')}
            >
              Amount
            </label>
            <Controller
              render={({ field }) => {
                const { name, ref, onChange, onBlur } = field;

                return (
                  <NumberFormat
                    id="amount"
                    ref={ref}
                    name={name}
                    onBlur={onBlur}
                    onValueChange={(c) => onChange(c.floatValue)}
                    allowEmptyFormatting
                    thousandSeparator
                    className={classname('form__input', errors.amount && 'form__input--error')}
                    autoComplete="off"
                  />
                );
              }}
              name="amount"
              control={control}
            />
            <p className="form__error-text">{errors.amount?.message}</p>
            <label
              htmlFor="refferCode"
              className={classname('form__label', errors.refferCode && 'form__label--error')}
            >
              Reffer code (optional)
            </label>
            <input
              id="refferCode"
              className={classname('form__input', errors.refferCode && 'form__input--error')}
              autoComplete="off"
              {...register('refferCode')}
            />
            <p className="form__error-text">{errors.refferCode?.message}</p>
            <button type="button" onClick={() => handleSubmit(onSubmit)()} className="mint__button">
              Buy
            </button>
          </form>
        ) : (
          <button onClick={() => changeChain()} className="mint__button">
            Change to the supported chain
          </button>
        )
      ) : (
        <button onClick={() => connect()} className="mint__button">
          Connect wallet
        </button>
      )}

      {histories && histories.length > 0 ? (
        <>
          <h2 className="title">Transactions</h2>
          <div className="history">
            <div className="history__header">
              <div className="history__row">
                <div className="history__id">ID</div>
                <div className="history__address">Address</div>
                <div className="history__tx-hash">Transaction hash</div>
                <div className="history__amount">Amount</div>
                <div className="history__created-at">Created at</div>
              </div>
            </div>
            <div className="history__body">
              {histories
                .slice(page * limit, page * limit + limit)
                .map(({ ID, address, tx_hash: txHash, amount, created_at: createdAt }, index) => (
                  <div key={index} className="history__row">
                    <div className="history__id">{ID}</div>
                    <div className="history__address">{shortenAccount(address)}</div>
                    <div className="history__tx-hash">{shortenHash(txHash)}</div>
                    <div className="history__amount">{amount}</div>
                    <div className="history__created-at">{formatDate(createdAt)}</div>
                  </div>
                ))}
            </div>
          </div>
          <div className="pagination">
            {pages > 1 ? (
              <>
                <button
                  onClick={() => setPage((prevState) => prevState - 1)}
                  disabled={page === 0}
                  className={classname(
                    'pagination__button',
                    page === 0 && 'pagination__button--disabled'
                  )}
                >
                  <img src={chevronLeftIcon} alt="previous" />
                </button>
                <button
                  onClick={() => setPage((prevState) => prevState + 1)}
                  disabled={page + 1 >= pages}
                  className={classname(
                    'pagination__button',
                    page + 1 >= pages && 'pagination__button--disabled'
                  )}
                >
                  <img src={chevronRightIcon} alt="next" />
                </button>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Mint;
