import axios from 'axios';
import { FIXXER_IO_KEY } from '../configs';

const baseUrl = 'http://data.fixer.io/api';

export default {
  convert: (from, to, amount) => axios.get(
    `${baseUrl}/latest`,
    { params: { access_key: FIXXER_IO_KEY, base: from, symbols: to } },
  )
    .then(({ data }) => {
      if (data.error) {
        throw new Error(data.error);
      }

      const multiplier = data.rates[to];

      return Number(multiplier * amount).toFixed(2);
    }),
};
