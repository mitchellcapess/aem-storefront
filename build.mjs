/* eslint-disable import/no-extraneous-dependencies */
import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

// Extend the cart fragment to include the gift message
overrideGQLOperations([
  {
    // The name of the drop-in to extend
    npm: '@dropins/storefront-cart',
    // Additional fields to include in the cart results (gift_message)
    operations: [
      `fragment CART_FRAGMENT on Cart {
        gift_message {
          from
          to
          message
        }
      }`
    ],
  },
]);