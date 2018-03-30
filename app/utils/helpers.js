export const transformData = data =>
  Object.values(data).reduce((res, item) => [...res, ...item], []);
