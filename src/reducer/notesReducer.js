import {
  HANDLE_SUBMIT,
  HANDLE_REMOVE,
  HANDLE_EDIT,
  SET_SEARCH_QUERY,
  SET_TOGGLE_SIDEBAR,
  ADD_LABEL,
  REMOVE_LABEL,
} from "./index";
import uuid from "react-uuid";

export const initialState = {
  notesList: [],
  searchQuery: "",
  labels: [],
  toggle: false,
};

export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TOGGLE_SIDEBAR:
      return {
        ...state,
        toggle: payload,
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };

    case HANDLE_SUBMIT:
      return {
        ...state,
        notesList: [
          {
            id: uuid(),
            title: payload.title,
            content: payload.content,
            backgroundColor: payload.backgroundColor,
          },
          ...state.notesList,
        ],
      };

    case HANDLE_EDIT:
      return {
        ...state,
        notesList: state.notesList.map((note) =>
          note.id === payload.currId
            ? {
                ...note,
                id: payload.id,
                title: payload.title,
                content: payload.content,
                backgroundColor: payload.backgroundColor,
              }
            : note
        ),
      };

    case HANDLE_REMOVE:
      return {
        ...state,
        notesList: state.notesList.filter(({ id }) => id !== payload),
      };

    case ADD_LABEL:
      return {
        ...state,
        labels: [...state.labels, payload],
      };

    case REMOVE_LABEL:
      return {
        ...state,
        labels: state.labels.filter((label) => label !== payload),
      };

    default:
      return state;
  }
};
