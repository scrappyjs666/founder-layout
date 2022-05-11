import listEmpty from './img/listEmpty.png';
import styles from './RepositoryEmpty.module.scss';

export const RepositoryEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.repositoryEmpty__image}
        src={listEmpty}
      />
      <span
        className={styles.repositoryEmpty__text}
      >
        Repository list is empty
      </span>
    </div>
  );
};
