import { Container } from './Container';
import UserNoFound from './UserNotFound.png';
import styles from './UserNotFound.module.scss'

export const StartSearching = () => {
  return (
    <Container>
      <div className = {styles.wrapper}>
        <image
          src = {UserNoFound}
          className = {styles.userNotFound__image} 
          alt = {'image User not found'}/>
        <h2 
          className = {styles.userNotFound__text}>
          User not found
        </h2>
      </div>
    </Container>
  );
};