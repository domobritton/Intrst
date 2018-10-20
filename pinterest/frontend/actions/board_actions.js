import * as boardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDSPINS = 'RECEIVE_BOARDSPINS';
export const RECEIVE_BOARDPINS = 'RECEIVE_BOARDPINS';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const CLEAR_BOARD_ERRORS = 'CLEAR_BOARD_ERRORS';

export const receiveBoards = (response) => ({
  type: RECEIVE_BOARDS,
  payload: response
});

export const receiveBoard = (response) => ({
  type: RECEIVE_BOARD,
  payload: response
});

export const receiveBoardsPins = (response) => ({
  type: RECEIVE_BOARDSPINS,
  payload: response
});

export const receiveBoardPins = (response) => ({
  type: RECEIVE_BOARDPINS,
  payload: response
});

export const removeBoard = (board) => ({
  type: REMOVE_BOARD,
  board
});

export const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const clearBoardErrors = () => ({
  type: CLEAR_BOARD_ERRORS
});

export const fetchBoards = () => dispatch => (
  boardAPIUtil.fetchBoards().then(response => dispatch(receiveBoards(response)),
    err => (dispatch(receiveBoardErrors(err.responseJSON))))
);

export const fetchBoard = (id) => dispatch => (
  boardAPIUtil.fetchBoard(id).then(response => dispatch(receiveBoard(response)),
    err => (dispatch(receiveBoardErrors(err.responseJSON))))
);

export const fetchBoardsPins = () => dispatch => (
  boardAPIUtil.fetchBoards().then(response => dispatch(receiveBoardsPins(response)),
    err => (dispatch(receiveBoardErrors(err.responseJSON))))
);

export const fetchBoardPin = (id) => dispatch => (
  boardAPIUtil.fetchBoard(id).then(pins => dispatch(receiveBoardPins(pins)),
    err => (dispatch(receiveBoardErrors(err.responseJSON))))
);

export const createBoard = (board) => (dispatch) => (
  boardAPIUtil.createBoard(board).then(boardFromServer => dispatch(receiveBoard(boardFromServer)),
    err => (dispatch(receiveBoardErrors(err.responseJSON))))
);

export const updateBoard = (board) => (dispatch) => (
  boardAPIUtil.updateBoard(board).then(boardFromServer => dispatch(receiveBoard(boardFromServer)),
    err => (dispatch(receiveBoardErrors(err.responseJSON))))
);

export const deleteBoard = (id) => (dispatch) => (
  boardAPIUtil.deleteBoard(id).then(board =>
    dispatch(removeBoard(board)),
    err => (dispatch(receiveBoardErrors(err.responseJSON))))
);