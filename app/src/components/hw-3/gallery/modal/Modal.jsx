import React, { Component } from "react";
import css from "../gallery.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    document.querySelector("body").classList.add("modal-open");
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    document.querySelector("body").classList.remove("modal-open");
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { imageUrl, alt } = this.props;

    return (
      <div className={css.Overlay} onClick={this.handleOverlayClick}>
        <div className={css.Modal}>
          <img src={imageUrl} alt={String(alt)} />
        </div>
      </div>
    );
  }
}

export default Modal;
