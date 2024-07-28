import { Component } from "react";

class LoginForm extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input type="text" value={inputValue} onChange={this.handleChange} />
    );
  }
}

export default LoginForm;
