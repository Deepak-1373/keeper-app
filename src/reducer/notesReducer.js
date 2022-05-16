import {
  HANDLE_SUBMIT,
  HANDLE_REMOVE,
  HANDLE_EDIT,
  SET_SEARCH_QUERY,
  SET_TOGGLE_SIDEBAR,
  ADD_LABEL,
  REMOVE_LABEL,
  EDIT_LABEL,
  HANDLE_ARCHIVE,
  RESET_ARCHIVE_NOTE,
} from "./index";
import uuid from "react-uuid";

export const initialState = {
  notesList: [],
  archiveList: [],
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
            label: payload.label,
            backgroundColor: payload.backgroundColor,
          },
          ...state.notesList,
        ],
        labels: [],
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
        labels: [...state.labels, { id: uuid(), labelName: payload }],
      };

    case REMOVE_LABEL:
      return {
        ...state,
        labels: state.labels.filter(({ id }) => id !== payload),
      };

    case EDIT_LABEL:
      return {
        ...state,
        labels: state.labels.map((label) =>
          label.id === payload.id
            ? {
                ...label,
                id: payload.id,
                labelName: payload.labelName,
              }
            : label
        ),
      };

    case HANDLE_ARCHIVE:
      return {
        ...state,
        notesList: state.notesList.filter(({ id }) => id !== payload.currId),
        archiveList: [
          {
            id: payload.id,
            title: payload.title,
            content: payload.content,
            label: payload.label,
            backgroundColor: payload.backgroundColor,
          },
          ...state.archiveList,
        ],
      };

    case RESET_ARCHIVE_NOTE:
      return {
        ...state,
        archiveList: state.archiveList.filter(({ id }) => id !== payload.id),
        notesList: [
          {
            id: payload.id,
            title: payload.title,
            content: payload.content,
            label: payload.label,
            backgroundColor: payload.backgroundColor,
          },
          ...state.notesList,
        ],
      };

    default:
      return state;
  }
};
