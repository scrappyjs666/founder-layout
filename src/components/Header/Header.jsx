import { Container } from '../Container/Container';
import githublogo from './img/githublogo.png';
import inputimg from './img/loupe.svg';
import styles from './Header.module.scss'



export const Header = ({findUser, setinputValue, children, urlLink}) => {
  return (
      <Container>
        <div className = {styles.wrapper}>
          {children}
          <div className = {styles.input__wrapper}>
          <img 
          className = {styles.header__logo} 
          src = {githublogo} alt = {'image githublogo'}
          />
          <div>
          <img 
            className = {styles.header__btn}
            src = {inputimg} 
            alt = {'input img'}  
            onClick={() => findUser()}/>
            <input 
              className = {styles.header__input}
              placeholder = {'Enter GitHub username'} 
              onChange={event => setinputValue(event.target.value)} 
              onKeyPress={(e) => e.key === 'Enter' && findUser()}/>
          </div>
          </div>
        </div>
      </Container>
  );
};

