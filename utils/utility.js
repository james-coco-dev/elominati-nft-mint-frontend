const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

const getDays = value => {
  return value / 3600 / 24;
};

const calculateAPR = (loan, repayment, duration) => {
  if (loan <= 0 || repayment < loan) return 0;
  const result = ((repayment - loan) / loan / duration) * 365 * 100;
  return Math.floor(result);
};

const calculateRate = (loan, repayment) => {
  if (loan <= 0 || repayment < loan) return 0;
  const result = ((100.0 * (repayment - loan)) / loan).toFixed(2);
  return result;
};

const compareByKey = (a, b) => {
  return a.key > b.key ? 1 : -1;
};

const compareByCount = (a, b) => {
  return a.count < b.count ? 1 : -1;
};

const days = {
  '3 years': 365 * 3,
  '90 Days': 90,
  '1 year': 365,
  '180 Days': 180,
  '2 years': 365 * 2,
};

const compareByDays = (a, b) => {
  try {
    return days[a.value] > days[b.value] ? 1 : -1;
  } catch (error) {
    console.log(error);
  }
  return 1;
};

const compareByStatus = (a, b) => {
  return a.status?.localeCompare(b.status);
};

const compareByValue = (key, isAscending) => (a, b) => {
  const multiplier = isAscending ? 1 : -1;
  if (typeof a === 'string') {
    return a[key] > b[key] ? multiplier : -multiplier;
  }
  return parseFloat(a[key]) > parseFloat(b[key]) ? multiplier : -multiplier;
};

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
function shortenAddress(address, compareAddress = '', chars = 4) {
  if (!address) {
    // throw Error(`Invalid 'address' parameter '${address}'.`);
    return '-';
  }
  if (address.toLowerCase() === compareAddress.toLowerCase()) return 'You';
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
}

export {
  isEmpty,
  getDays,
  calculateAPR,
  calculateRate,
  compareByKey,
  compareByCount,
  compareByDays,
  compareByStatus,
  compareByValue,
  shortenAddress,
};
