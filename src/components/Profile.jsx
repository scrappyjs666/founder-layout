import styled from 'styled-components';
import { Container } from './Container';
import socialPerson from './social-person.svg';
import socialTwoPerson from './social-twoperson.svg';

const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 280px;
  max-height: 280px;
  float: left;
  margin: 0 100px 29px 0;
`;

const ProfileName = styled.div`
  max-width: 170px;
  overflow: hidden;
  color: var(--black-color);
  font-weight: var(--fw-bold);
  font-size: var(--fs-24);
  line-height: 34px;
  margin-bottom: 12px;
`

const ProfileUserName = styled.a`
  max-width: 81px;
  overflow: hidden;
  color: var(--main-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-24);
  line-height: 22px;
`

const ProfileSubscriptions = styled.div`
  display:flex;
  gap: 20px;
  margin-top: 25px;
`

const ProfileFollowers = styled.div`
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-16);
  line-height: 24px;
`
const ProfileFollowing = styled.div`
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-16);
  line-height: 24px;
`

const ProfileSocial = styled.img `
  ;
`
ProfileSocial.defaultProps = {
  src: socialPerson,
};

const ProfileTwoSocial = styled.img `
  ;
`
ProfileTwoSocial.defaultProps = {
  src: socialTwoPerson,
};



export const Profile = (props) => {
  return (
      <Container>
      <ProfileImage src = {props.ProfileImage} alt = {'image'}/>
        <ProfileName>{props.ProfileName}</ProfileName>
        <ProfileUserName>{props.ProfileUserName}</ProfileUserName>
        <ProfileSubscriptions>
          <ProfileSocial /> <ProfileFollowers>Followers {props.ProfileFollowers}</ProfileFollowers>
          <ProfileTwoSocial /> <ProfileFollowing>Following {props.ProfileFollowing}</ProfileFollowing>
        </ProfileSubscriptions>
      </Container>
  );
};