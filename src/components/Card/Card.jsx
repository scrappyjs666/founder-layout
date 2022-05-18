import styles from './Card.module.scss';

export const Card = ({ name, description, link }) => {
  return (
    <div className={styles['user-card__wrap']}>
      <li className={styles.user__card}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={styles['user-card__title']}
          >
            {name}
          </div>
        </a>
        <div
          className={styles['user-card__descr']}
        >
          {description}
        </div>
      </li>
    </div>
  );
};
