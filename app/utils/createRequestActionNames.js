export const createRequestActionNames = (name, argMethods = [], argStatuses = []) => {
  const methods = argMethods.length ? argMethods : [
    'GET',
    'POST',
    'PATCH',
    'DELETE',
  ];
  const statuses = argStatuses.length ? argStatuses : [
    'REQUEST',
    'SUCCESS',
    'FAIL',
  ];

  return methods.reduce((result, method) => ({
    ...result,
    [method]: statuses.reduce((acc, status) => ({
      ...acc,
      [status]: `${name}/${method}_${status}`,
    }), {}),
  }), {});
};
