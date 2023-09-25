import { toast } from 'react-toastify';
import Button from '../components/Button';
import styles from '../components/Form/Form.module.scss'
import Typography from '../components/Typography/Typography';
import adminStyles from './AdminStyles.module.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const AdminAuth = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    login: '',
    password: '',
  })
  const getAccesToAdminPanel = () => {
    const data = {
      email: form.login,
      password: form.password,
    }
    fetch('/authorization/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.status === 200) {
        toast("Авторизация прошла успешно!")
        return navigate('/admin-panel')
      }
    })
  }
  return (
  <div className={adminStyles.admin}>
    <Typography type='h2' text='Вход в ПА' />
        <input
          onChange={(e) => setForm({
            ...form,
            login: e.target.value
          })}
          className={styles.formInput}
          placeholder="Логин"
          value={form.login}
        />
        <input
          onChange={(e) => setForm({
            ...form,
            password: e.target.value
          })}
          className={styles.formInput}
          placeholder="Пароль"
          value={form.password}
        />
        <Button onClick={getAccesToAdminPanel}>Войти</Button>
  </div>
  )
}

export default AdminAuth;