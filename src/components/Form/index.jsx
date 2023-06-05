import Typography from "../Typography/Typography";
import styles from './Form.module.scss';
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import Button from "../Button";

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
  })

  return (
    <div className={styles.form}>
      <Typography className={styles.productsTypography} type="h3" text="Оставьте заявку, чтобы получить консультацию" />
      <div className={styles.formBlock}>
        <input className={styles.formInput} placeholder="Имя" />
        <PhoneInput
          className={styles.formInput}
          placeholder="Телефон"
          defaultCountry="RU"
          value={form.phone}
          onChange={(val) => {setForm({ ...form, phone: val })}}
          error={form.phone ? (isValidPhoneNumber(form.phone) ? undefined : 'Invalid phone number') : 'Заполните поле корректно'}
        />
        <input className={styles.formInput} type="email" placeholder="E-mail"/>
      </div>
      <Button className={styles.formButton}>Оставить заявку</Button>
    </div>
  )
}

export default Form;