import styles from './UserRepositories.module.scss';

export const UserRepositories = ({ title, reposCount, children }) => {
  return (
    <section
      className={styles.user__repositories}
    >
      <div
        className={styles['user-repositories__title']}
      >
        {title}
        (
        {reposCount}
        )
      </div>
      {children}
    </section>
  );
};
