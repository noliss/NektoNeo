import Typography from "../Typography/Typography";
import styles from "./Form.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import Button from "../Button";
import classNames from "classnames";
import { toast } from "react-toastify";

const Form = () => {
  const [formError, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: null,
  });
  const sendMail = async () => {
    const localStoragePc = localStorage.getItem("PC");
    if (!form.name.length) {
      toast.error("Укажите имя");
      return setFormErrors({
        ...formError,
        name: true,
      });
    }
    if (!form.email.length) {
      toast.error("Укажите Ваш Email");
      return setFormErrors({
        ...formError,
        email: true,
      });
    }
    if (!form.phone.length) {
      toast.error("Укажите ваш номер телефона");
      return setFormErrors({
        ...formError,
        phone: true,
      });
    }
    setFormErrors({
      name: "",
      phone: "",
      email: "",
    });
    toast.success("Сообщение успешно отправлено!");
    await fetch("/sendMail/", {
      method: "POST",
      body: JSON.stringify({...form, product: localStoragePc}),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className={styles.form}>
      <Typography
        className={styles.formTypography}
        type="h3"
        text="Оставьте заявку, чтобы получить консультацию"
      />
      <div className={styles.formBlock}>
        <input
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          className={classNames(styles.formInput, {
            [styles.formInputError]: formError.name,
          })}
          placeholder="Имя"
        />
        <PhoneInput
          className={classNames(styles.formInput, {
            [styles.formInputError]: formError.phone,
          })}
          placeholder="Телефон"
          defaultCountry="RU"
          value={form.phone}
          onChange={(val) => {
            setForm({ ...form, phone: val });
          }}
          error={
            form.phone
              ? isValidPhoneNumber(form.phone)
                ? undefined
                : "Invalid phone number"
              : "Заполните поле корректно"
          }
        />
        <input
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          className={classNames(styles.formInput, {
            [styles.formInputError]: formError.email,
          })}
          type="email"
          placeholder="E-mail"
        />
      </div>
      <Button type="pink" className={styles.formButton} onClick={sendMail}>
        Оставить заявку
      </Button>
    </div>
  );
};

export default Form;
