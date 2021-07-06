export const BALANCES = "TOTALAMOUNT";

export const setBalances = (amounts) => {
  return {
    type: BALANCES,
    payload: amounts,
  };
};
