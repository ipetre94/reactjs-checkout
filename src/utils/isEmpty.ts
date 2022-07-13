// check if an object has all values null or empty
export const isEmpty = (object: any) => {
  return !Object.values(object).every((x) => x === null || x === "");
};
