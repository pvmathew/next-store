export const fetchProducts = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
};

// export const fetchCurrency = await (
//   await fetch(
//     "https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY"
//   )
// ).json();
