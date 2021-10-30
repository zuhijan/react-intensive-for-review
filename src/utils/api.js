import { URL } from './constant';

export const getIngredients = () => {
  return fetch(`${URL}/ingredients`, {}).then((res) => {
    return res.json()
  });
};

export const getOrderNumber = (orderData) => {
  return fetch(`${URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  }).then((res) => {
  return res.json();
  });
};
