import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "../Forms/Form.module.css";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name,e.target.value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    const obj = {
      name,
      number,
    };

    this.props.addNewContact(obj);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  prodIdName = uuidv4();
  prodIdNumber = uuidv4();

  render() {
    const { handleSubmit, prodIdName, handleChange, prodIdNumber } = this;
    const { name, number } = this.state;
    return (
      <div>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={prodIdName}>
            {" "}
            Name
          </label>
          <input
            className={s.input}
            id={prodIdName}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />

          <label className={s.label} htmlFor={prodIdNumber}>
            Number
          </label>
          <input
            className={s.input}
            id={prodIdNumber}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />

          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.number,
};