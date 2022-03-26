import {
  HANDLE_SUBMIT,
  HANDLE_REMOVE,
  HANDLE_EDIT,
  SET_SEARCH_QUERY,
} from "./index";
import uuid from "react-uuid";

export const initialState = {
  notesList: [],
  searchQuery: "",
};

export const notesReducer = (state, { type, payload }) => {
  switch (type) {
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
              }
            : note
        ),
      };

    case HANDLE_REMOVE:
      return {
        ...state,
        notesList: state.notesList.filter(({ id }) => id !== payload),
      };

    default:
      return state;
  }
};
