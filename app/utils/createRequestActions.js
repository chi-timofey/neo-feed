export const createRequestActions = ({
  request: requestActionName,
  success: successActionName,
  fail: failActionName,
}) => ({
  request(data) {
    if (data !== undefined) {
      return {
        type: requestActionName,
        payload: {
          data,
        },
      };
    }
    return {
      type: requestActionName,
    };
  },
  success(data) {
    return {
      type: successActionName,
      payload: {
        data,
      },
    };
  },
  fail(error) {
    return {
      type: failActionName,
      payload: {
        error,
      },
    };
  },
});
