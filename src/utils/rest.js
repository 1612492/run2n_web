import axios from 'axios';

export function postContact({ email, message }) {
  return axios.post(import.meta.env.VITE_WEB_SERVER + '/contact', { email, message });
}

export function getReferCode({ address }) {
  return axios.get(import.meta.env.VITE_RUN2N_SERVER + '/refer', { params: { address } });
}

export function postReferCode({ address, code, txHash, amount }) {
  return axios.post(import.meta.env.VITE_RUN2N_SERVER + '/refer', {
    address,
    code,
    tx_hash: txHash,
    amount,
  });
}

export function getMint() {
  return axios.get(import.meta.env.VITE_RUN2N_SERVER + '/mint', {
    params: { offset: 0, limit: 1000 },
  });
}
