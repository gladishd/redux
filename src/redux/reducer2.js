// action types
const GET_TEXT = 'GET_TEXT';
const UPDATE_TEXT = 'UPDATE_TEXT';

// action creators
export const getText = () => ({
  type: GET_TEXT,
})

export const updateText = (newText1, newText2) => ({
  type: UPDATE_TEXT,
  newText1,
  newText2,
})

// thunk creators
export const fetchTextThunkCreator = () => {
  return async (dispatch) => {
    try {
      dispatch(getText());
    } catch (error) {
      console.error(error);
    }
  }
}

export const updateTextThunkCreator = (newText1, newText2) => {
  return async (dispatch) => {
    try {
      dispatch(updateText(newText1, newText2));
    } catch (error) {
      console.error(error)
    }
  }
}

let initialState = { initialValue: "if this value is on the redux store, don't render it" };

export default function reducer2(state = initialState, action) {
  switch (action.type) {
    case GET_TEXT:
      return state
    case UPDATE_TEXT:
      return [
        { "_id": 1, "about": action.newText1 },
        { "_id": 2, "about": action.newText2 }
      ]
    default:
      return state;
  }
}
