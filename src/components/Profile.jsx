import styled from 'styled-components';
import { Container } from './Container';
import socialPerson from './images/social-person.svg';
import socialTwoPerson from './images/social-twoperson.svg';

const Image = styled.img`
  border-radius: 50%;
  max-width: 280px;
  max-height: 280px;
  margin: 0 100px 29px 0;
`;

const ImageWrapp = styled.a`

`

const Name = styled.h2`
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
  margin-top: 25px;
`

const Followers = styled.div`
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-16);
  line-height: 24px;
  margin-right: 20px;
`
const Following = styled.div`
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-16);
  line-height: 24px;
`

const Social = styled.img `
  margin-right: 12px;
  ;
`
Social.defaultProps = {
  src: socialPerson,
};

const TwoSocial = styled.img `
  margin-right: 12px;
  ;
`
TwoSocial.defaultProps = {
  src: socialTwoPerson,
};



export const Profile = ({avatar,name,userName,followers,following, link}) => {
  return (
      <Container>
      <ImageWrapp href= {link} target="_blank">
        <Image src = {avatar} alt = {'image'}/>
      </ImageWrapp>
        <Name>{name}</Name>
        <UserName href= {link} target="_blank">{userName}</UserName>
        <Subscriptions>
          <Social /> <Followers>Followers {followers}</Followers>
          <TwoSocial /> <Following>Following {following}</Following>
        </Subscriptions>
      </Container>
  );
};