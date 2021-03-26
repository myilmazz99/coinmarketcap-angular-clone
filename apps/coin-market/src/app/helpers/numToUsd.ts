export const numToUsd = () =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 6,
  });
