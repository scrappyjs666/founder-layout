import { Container } from '@components/Container/Container';
import styles from './Main.module.scss';

export const Main = ({ children }) => {
  return (
    <Container>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero}>
          {children}
        </div>
      </div>
    </Container>
  );
};
