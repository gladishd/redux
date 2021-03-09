// action types
const GET_INT = 'GET_INT';
const DUPLICATE_CURRENT_INT = 'DUPLICATE_CURRENT_INT';
const REMOVE_INT = 'REMOVE_INT';
const UPDATE_INT = 'UPDATE_INT';

// action creators
export const getInt = () => ({
  type: GET_INT,
})
export const duplicateCurrentInt = (int) => ({
  type: DUPLICATE_CURRENT_INT,
  int
})
export const removeInt = () => ({
  type: REMOVE_INT,
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
      dispatch(duplicateCurrentInt(int));
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

let initialState = { initialInteger: 10 };

export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case GET_INT:
      return state
    case DUPLICATE_CURRENT_INT:
      return action.int + action.int;
    case UPDATE_INT:
      return action.int + action.updatedInt;
    case REMOVE_INT:
      return { initialInteger: null }
    default:
      return state;
  }
}
