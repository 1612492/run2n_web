import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { hexValue } from '@ethersproject/bytes';

import MintPass from '../abis/MintPass.json';

const CONTRACT_ADDRESS = '0x78958C9713ab25fA4dfa92b83430d3C1E1586483';

const chain = {
  chainId: hexValue(97),
  chainName: 'Binance Smart Chain Testnet',
  nativeCurrency: {
    symbol: 'tBNB',
    decimals: 18,
  },
  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  blockExplorerUrls: ['https://testnet.bscscan.com'],
};

export function hasProvider() {
  if (!window.ethereum) return false;

  if (window.ethereum.providers) {
    return window.ethereum.providers.some((provider) => provider.isMetaMask);
  }

  return window.ethereum.isMetaMask;
}

export function getProvider() {
  if (window.ethereum.providers) {
    return window.ethereum.providers.find((provider) => provider.isMetaMask);
  }

  return window.ethereum;
}

export class Library {
  constructor() {
    this.provider = getProvider();
  }

  connect() {
    return this.provider.request({ method: 'eth_requestAccounts' });
  }

  getBalance(account) {
    return this.provider.request({
      method: 'eth_getBalance',
      params: [account, 'latest'],
    });
  }

  async getAccount() {
    try {
      const [account] = await this.provider.request({ method: 'eth_accounts' });
      return account;
    } catch (error) {
      throw error;
    }
  }

  async getChainId() {
    try {
      const chainId = await this.provider.request({ method: 'eth_chainId' });
      return hexValue(chainId);
    } catch (error) {
      throw error;
    }
  }

  addChain() {
    return this.provider.request({
      method: 'wallet_addEthereumChain',
      params: [chain],
    });
  }

  changeChain() {
    return this.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chain.chainId }],
    });
  }

  getPrice() {
    const web3Provider = new Web3Provider(this.provider);
    const contract = new Contract(CONTRACT_ADDRESS, MintPass, web3Provider);

    return contract.price();
  }

  orderMintPass(amount, price) {
    const web3Provider = new Web3Provider(this.provider);
    const contract = new Contract(CONTRACT_ADDRESS, MintPass, web3Provider);

    return contract.orderMintPass(amount, { value: amount * price });
  }
}
