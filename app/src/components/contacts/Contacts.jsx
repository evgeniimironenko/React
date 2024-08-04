import { nanoid } from "nanoid";
import css from "./Contacts.module.css";
import { Component } from "react";

class Contacts extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.userName.value;
    console.log(name);
  };
  inputId = nanoid();
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputId}>Name</label>
        <input type="text" name="userName" required id={this.inputId} />
        <button type="submit">add contact</button>
      </form>
    );
  }
}

export default Contacts;
