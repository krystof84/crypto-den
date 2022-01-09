const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const usdPrice = {
  type: 'number',
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
};

export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const addIndexesObjectsInArray = (data) => {
  let singleObject = {};
  let result = [];

  data.map((item, index) => {
    singleObject = {
      ...item,
      index: ++index,
    };
    result.push(singleObject);
  });

  return result;
};