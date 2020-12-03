export const compare = (a, b) => {
  const getNumsA = a.date.split('/');
  const getNumsB = b.date.split('/');
  const yearA = parseInt(getNumsA[1]);
  const yearB = parseInt(getNumsB[1]);
  const monthA = parseInt(getNumsA[0]);
  const monthB = parseInt(getNumsB[0]);

  if (yearA > yearB || (yearA === yearB && monthA > monthB)) {
    return -1;
  } else {
    return 1;
  }
};
