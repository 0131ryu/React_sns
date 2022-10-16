const store = require("./store");

store.subscribe(() => {
  console.log(store.getState());
});

const increment = {
  type: "INCREMENT",
};

const login = {
  type: "LOGIN",
};

const logout = {
  type: "LOGOUT",
};

const setUsername = {
  type: "SET_USERNAME",
  payload: {
    username: "john_123",
  },
};

const updateName = {
  type: "UPDATE_NAME",
  payload: {
    name: "jane",
  },
};

const decrement = {
  type: "DECREMENT",
};

store.dispatch(increment);

store.dispatch(updateName);

store.dispatch(login);

store.dispatch(setUsername);
