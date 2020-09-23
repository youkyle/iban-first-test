//compare function to descendent sorting
export const compare = (a, b) => {
  const convertedA = a.amount * currencyRate(a.currency);
  const convertedB = b.amount * currencyRate(b.currency);

  if (convertedA < convertedB) {
    return 1;
  }
  if (convertedA > convertedB) {
    return -1;
  }
  return 0;
};
//get currency rate
export const currencyRate = (currency) => {
  let rate;
  switch (currency) {
    case "USD":
      rate = 1.17;
      break;
    case "GBP":
      rate = 0.92;
      break;
    case "CHF":
      rate = 1.08;
      break;
    default:
      rate = 1;
  }
  return rate;
};
