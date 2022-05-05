import { Container } from '../Container/Container';
import styles from './Main.module.scss'

export const Main = ({children}) => {
  return (
      <Container>
        <main className = {styles.main}>
          {children}
        </main>
      </Container>
  );
};