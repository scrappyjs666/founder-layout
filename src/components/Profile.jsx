import styled from 'styled-components';
import { Container } from './Container';
import socialPerson from './social-person.svg';
import socialTwoPerson from './social-twoperson.svg';

const Image = styled.img`
  border-radius: 50%;
  max-width: 280px;
  max-height: 280px;
  margin: 0 100px 29px 0;
`;

const Name = styled.div`
  max-width: 170px;
  overflow: hidden;
  color: var(--black-color);
  font-weight: var(--fw-bold);
  font-size: var(--fs-24);
  line-height: 34px;
  margin-bottom: 12px;
`

const UserName = styled.a`
  max-width: 81px;
  overflow: hidden;
  color: var(--main-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-24);
  line-height: 22px;
`

const Subscriptions = styled.div`
  display:flex;
  gap: 20px;
  margin-top: 25px;
`

const Followers = styled.div`
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-16);
  line-height: 24px;
`
const Following = styled.div`
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-16);
  line-height: 24px;
`

const Social = styled.img `
  ;
`
Social.defaultProps = {
  src: socialPerson,
};

const TwoSocial = styled.img `
  ;
`
TwoSocial.defaultProps = {
  src: socialTwoPerson,
};



export const Profile = ({avatar,name,userName,followers,following}) => {
  return (
      <Container>
      <Image src = {avatar} alt = {'image'}/>
        <Name>{name}</Name>
        <UserName>{userName}</UserName>
        <Subscriptions>
          <Social /> <Followers>Followers {followers}</Followers>
          <TwoSocial /> <Following>Following {following}</Following>
        </Subscriptions>
      </Container>
  );
};