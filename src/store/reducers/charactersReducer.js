import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  SINGLECHARACTER_REJECT,
  RESET_DATA,
  CHANGE_PARAMS,
  LOAD_MORE_DATA,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: {},
  pending: false,
  pendingsingleCharacter: true,
  error: null,
  errorSingleCharacter: false,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null,
  },
};
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
        error: null,
      };
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pendingsingleCharacter: false,
        errorSingleCharacter: null,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pendingsingleCharacter: true,
      };
    case SINGLECHARACTER_REJECT:
      return {
        ...state,
        pendingsingleCharacter: false,
        errorSingleCharacter: action.error,
      };
    case RESET_DATA:
      return {
        ...state,
        pendingsingleCharacter: false,
        errorSingleCharacter: null,
        singleCharacter: {},
      };
    case CHANGE_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };

    default:
      return state;
  }
};

export default characterReducer;
