import { usersActionTypes } from "./action";

const userInitialState = {
  users: ["John Doe", "Marry Jane"],
};

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case usersActionTypes.ADD_USER: {
      return { ...state, users: [...state.users, action.user] };
    }
    default:
      return state;
  }
}
