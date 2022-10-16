const updateState = (e) => {
  const { name, value } = e.target;
  let user = Object.assign({}, this.state.user);
  user[name] = value;
  return this.setState({ user });
};

this.setState({ user: { ...this.state.user, [target.name]: target.value } });
