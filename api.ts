export const getProductList = async () => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};
export const getProductInfo = async (id: number) => {
  return await (await fetch("https://fakestoreapi.com/products/" + id)).json();
};

// export const fetchCurrency = await (
//   await fetch(
//     "https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY"
//   )
// ).json();
