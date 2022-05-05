import { Container } from '../Container/Container';
import socialPerson from '@images/social-person.svg';
import socialTwoPerson from '@images/social-twoperson.svg';
import styles from './Profile.module.scss'

export const Profile = ({avatar,name,userName,followers,following, link}) => {
  return (
      <Container>
        <a href= {link} target="_blank">
          <img 
          className = {styles.profile__image} 
          src = {avatar} 
          alt = {'profile image'}/>
        </a>
        <h2 className = {styles.profile__name}>{name}</h2>
        <a 
          className = {styles.profile__link} 
          href= {link} 
          target="_blank">
          {userName}
        </a>
        <div className = {styles.profile__subscriptions}>
          <img  
            className = {styles.profilesocial__image} 
            src= {socialPerson} 
            alt = {'socialPerson'} /> 
          <div 
            className = {styles.profile__followers}>
            Followers {followers}
          </div>
          <img  
            className = {styles.profilesocial__image}
            src= {socialTwoPerson}
            alt = {'socialTwoPerson'} /> 
          <div 
            className = {styles.profile__following}>
            Following {following}
          </div>
        </div>
      </Container>
  );
};