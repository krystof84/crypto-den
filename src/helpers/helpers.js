const decimalCount = (num) => {
  const numStr = String(num);

  if (numStr.includes('.')) {
    return numStr.split('.')[1].length;
  }
  return 0;
};

export const formatPrice = (price, currencySymbol, currencySymbolPlacement = true) =>  {
  let digits;

  if(Number.isInteger(price)) {
    digits = 2;
  } else {
    digits = decimalCount(price);
  }

  return currencySymbolPlacement ?
    currencySymbol + ' ' + (price).toFixed(digits).replace(/\d(?=(\d{3})+\.)/g, '$&,') :
    (price).toFixed(digits).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' ' + currencySymbol;
};

export const usdPrice = {
  type: 'number',
  valueFormatter: ({ value }) => {
    if( value !== null && value !== '' ) {
      return formatPrice(value, '$');
    }
  },
};

export const numberWithCommas = (x) => {
  if( x!== null && x !== '' ) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
};

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