import styles from '../components/Form/Form.module.scss'
import Typography from '../components/Typography/Typography';
import adminStyles from './AdminStyles.module.scss'

const Admin = () => {
  return (
  <div className={adminStyles.admin}>
    <Typography type='h2' text='Вход в ПА' />
    <input
          onChange={(e) => {}}
          className={styles.formInput}
          placeholder="Логин"
        />
        <input
          onChange={(e) => {}}
          className={styles.formInput}
          placeholder="Пароль"
        />
  </div>
  )
}

export default Admin;