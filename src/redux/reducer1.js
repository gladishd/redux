// action types
const SET_INT = 'SET_INT';
const ADD_NEW_INT = 'ADD_NEW_INT';
const REMOVE_INT = 'REMOVE_INT';
const UPDATE_INT = 'UPDATE_INT';

// action creators
export const getInt = (int) => ({
  type: SET_INT,
  int
})
export const addNewInt = (int) => ({
  type: ADD_NEW_INT,
  int
})
export const removeInt = (int) => ({
  type: REMOVE_INT,
  int
})
export const updateInt = (intId, updatedInt) => ({
  type: UPDATE_INT,
  intId,
  updatedInt
})

// thunk creators
export const fetchSingleInt = () => {
  return async (dispatch) => {
    try {
      dispatch(getInt());
    } catch (error) {
      console.error(error);
    }
  }
}
export const postNewInt = (int) => {
  return async (dispatch) => {
    try {
      dispatch(addNewInt(int));
    } catch (error) {
      console.error(error);
    }
  }
}
export const removeIntThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(removeInt());
    } catch (error) {
      console.error(error);
    }
  }
}
export const updateIntThunk = (int, updatedInt) => {
  return async (dispatch) => {
    try {
      dispatch(updateInt(int, updatedInt));
    } catch (error) {
      console.error(error)
    }
  }
}

let initialState = {};

export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case SET_INT:
      return action.int;
    case ADD_NEW_INT:
      return action.int + action.int;
    case UPDATE_INT:
      return action.int + action.updatedInt;
    default:
      return state;
  }
}
