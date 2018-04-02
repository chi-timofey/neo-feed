export default function combineEvents(reducers, initialState) {
  return (state = initialState, action) => {
    if (undefined in reducers) throw new Error('Unappropriate reducer type', reducers);

    if (action.type in reducers) {
      return reducers[action.type](state, action);
    } else if ('default' in reducers) {
      return reducers.default(state, action);
    }
    return state;
  };
}
