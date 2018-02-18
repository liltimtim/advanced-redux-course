

export default function({ dispatch }) {
  return next => action => {
    // check if payload exists or 
    // .then promise helper doesn't exist
    // return it
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    // we have a promise, wait for it to resolve.
    // make sure action's promise resolves
    action.payload
      .then(response => {
        console.log(response);
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      })
      .catch(err => {
        console.log(err);
      });
  };
}