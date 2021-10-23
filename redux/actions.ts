
export const TICK = 'TICK';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: TICK,
    payload: { light: false, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: RESET })