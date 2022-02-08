import { Component } from "react";
import s from "../Contacts/ContactList.module.css";
import PropTypes from "prop-types";

export class ContactList extends Component {
  render() {
    return (
      <ul className={s.list}>
        {this.props.contacts.map(({ id, name, number }) => (
          <li className={s.list__item} key={id}>
            {name} : {number}
            <button
              className={s.button}
              onClick={this.props.removeContact}
              type="button"
              id={id}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};