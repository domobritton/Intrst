import * as PinsAPIUtil from '../util/pins_api_util';
export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
export const CLEAR_PIN_ERRORS = 'CLEAR_PIN_ERRORS';

export const receivePins = (pins) => ({
  type: RECEIVE_ALL_PINS,
  pins
});

export const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin
});

export const removePin = (pin) => ({
  type: REMOVE_PIN,
  pin
});

export const pinErrors = (errors) => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

export const clearPinErrors = (errors) => ({
  type: CLEAR_PIN_ERRORS,
  errors
});

export const fetchPins = () => dispatch => (
  PinsAPIUtil.fetchPins().then(pins => dispatch(receivePins(pins)),
  err => (dispatch(pinErrors(err.responseJSON))
  ))
);

export const fetchPin = (id) => dispatch => (
  PinsAPIUtil.fetchPin(id).then(pin => dispatch(receivePin(pin)),
  err => (dispatch(pinErrors(err.responseJSON))
  ))
);

// export const createPin = (formData) => dispatch => (
//   PinsAPIUtil.createPin(formData).then(pinFromServer => dispatch(receivePin(pinFromServer)),
//   err => (dispatch(pinErrors(err.responseJSON))
//   ))
// );
// export const createPin = (formData) => {
//   debugger;
//   return dispatch => {
//     return PinsAPIUtil.createPin(formData).then(pinFromServer => {
//       return dispatch(receivePin(pinFromServer));
//     });
//   };
// };

export const deletePin = (id) => dispatch => (
  PinsAPIUtil.deletePin(id).then(pin => dispatch(removePin(pin)),
  err => (dispatch(pinErrors(err.responseJSON))
  ))
);
