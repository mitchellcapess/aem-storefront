/* eslint-disable import/no-cycle */
import { initializers } from '@dropins/tools/initializer.js';
import { initialize, setFetchGraphQlHeaders } from '@dropins/storefront-cart/api.js';
import { initializeDropin } from './index.js';
import { fetchPlaceholders } from '../aem.js';
import { getHeaders } from '../configs.js';

await initializeDropin(async () => {
  setFetchGraphQlHeaders(await getHeaders('cart'));

  const labels = await fetchPlaceholders();
  const langDefinitions = {
    default: {
      ...labels,
    },
  };

  await initializers.mountImmediately(initialize, {
    langDefinitions,
    models: {
      CartModel: {
        transformer: (data) => {
          const { gift_message: giftMessage } = data;
          return {
            giftMessage,
          };
        },
      },
    },
  });
})();