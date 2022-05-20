import styles from './CardList.module.scss';

export const CardList = ({ children }) => {
  return (
    <ul
      className={styles.card__list}
    >
      {children}
    </ul>
  );
};
