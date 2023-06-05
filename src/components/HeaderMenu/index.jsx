import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  const menuItems = [
    { name: "Главная", link: "#" },
    { name: "Услуги", link: "#" },
    { name: "Сборки", link: "#" },
    { name: "Отзывы", link: "#" },
  ];
  return ( 
      <ul className={styles.menu}>
        {
          menuItems.map((item) => <li key={item.name} className={styles.menuItem}>{item.name}</li>)
        }
      </ul> 
  );
};

export default HeaderMenu;
