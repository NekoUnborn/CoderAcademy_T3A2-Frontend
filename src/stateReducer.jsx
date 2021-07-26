import { createContext } from "react";

export default function stateReducer(currentState, action) {
  switch (action.type) {
    case "addChecklistEntry": {
      return {
        ...currentState,
        checklistentries: [action.data, ...currentState.checklistentries],
      };
    }

    case "setChildren": {
      return {
        ...currentState,
        children: action.children,
      };
    }

    case "setChecklistEntries": {
      return {
        ...currentState,
        checklistentries: action.checklistentries,
      };
    }

    case "setToken": {
      localStorage.setItem("token", action.data.token);
      return {
        ...currentState,
        token: action.data.token,
      };
    }

    default:
      return currentState;
  }
}

export const stateContext = createContext();
