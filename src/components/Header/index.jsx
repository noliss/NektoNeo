import Button from '../Button';
import HeaderMenu from '../HeaderMenu';
import { ReactComponent as Logo } from '../../images/svg/logo.svg'
import styles from './Header.module.scss';

export const Header = () => {
  return <div className={styles.header}>
    <div className={styles.headerLeft}>
        <Logo className={styles.headerLogo}/>
        <HeaderMenu />
    </div>
    <Button className={styles.headerButton}>Связь с менеджером</Button>
  </div>
}
