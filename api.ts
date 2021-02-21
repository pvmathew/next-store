export const fetchProducts = async () => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

// export const fetchCurrency = await (
//   await fetch(
//     "https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY"
//   )
// ).json();
