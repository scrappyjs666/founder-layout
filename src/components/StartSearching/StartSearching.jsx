import { Container } from '@components/Container/Container';
import styles from './StartSearching.module.scss';
import imgloupe from './img/loupe.svg';

export const StartSearching = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <img
          className={styles.search__imgloupe}
          src={imgloupe}
          alt="loupe"
        />
        <h2
          className={styles.search__title}
        >
          Start with searching a GitHub user

        </h2>
      </div>
    </Container>
  );
};
