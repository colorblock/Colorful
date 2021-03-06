export const devMode = process.env.REACT_APP_STAGE !== 'prod';
const getServerUrl = () => {
  // read env params
  switch (process.env.REACT_APP_STAGE) {
    case 'dev':
      return 'http://api.colorblockart.com';
    case 'prod':
      return 'https://api.colorblock.art';
    default:
      return 'http://localhost:5000';
  }
};
export const serverUrl = getServerUrl();

export const createWalletConfig = {
  minAddressLength: 3,
  maxAddressLength: 256,
  minPasswordLength: 3,
  maxPasswordLength: 36
};

export const cookiesKey = 'colorful';

export const saltRounds = 10;

export const networkId = 'mainnet01';
export const chainId = '7';
export const apiHost = `https://api.chainweb.com/chainweb/0.0/${networkId}/chain/${chainId}/pact`;
export const gasPrice = 0.000000000001;
export const gasLimit = 2000;
export const ttl = 600;
export const chainsCount = 20;

export const modules = {
  colorblock: 'free.colorblock-test'
};

export const heartbeatValidity = 30 * 1000;  // keep 30 seconds
