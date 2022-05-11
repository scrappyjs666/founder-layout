import { Container } from '../Container/Container';
import UserNoFound from './img/UserNotFound.png';
import styles from './UserNotFound.module.scss';

export const UserNotFound = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <image
          src={UserNoFound}
          className={styles.userNotFound__image}
          alt="image User not found"
        />
        <h2
          className={styles.userNotFound__text}
        >
          User not found
        </h2>
      </div>
    </Container>
  );
};
