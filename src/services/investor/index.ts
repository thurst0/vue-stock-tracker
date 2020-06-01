import axios from 'axios';

export async function getTickerPrice({ ticker }: { ticker: string }) {
  return axios.request({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${ticker}/price`,
  });
}
