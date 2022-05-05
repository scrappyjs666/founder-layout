import { Container } from '../Container/Container';
import styles from './ReposInfo.module.scss'

export const ReposInfo = ({title,reposCount,children}) => {
  return (
      <Container>
        <h2
          className = {styles.repos__title}>{title} ({reposCount})
        </h2>
        {children}
      </Container>
  );
};