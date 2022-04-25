import styled from 'styled-components';
import { Container } from './Container';
import { Card } from './Card';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--bgGrey-color);
  padding: 40px 56px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 280px;
  max-height: 280px;
`;

const Title = styled.h1`
  color: var(--black-color);
  font-weight: var(--fw-bold);
  font-size: var(--fs-large);
`


export const Main = (props) => {
  return (
      <Container>
        <Wrapper>
          <ProfileImage src={props.ProfileImage} alt={props.name} />
          <Title>Repositories ({props.repoNumber})</Title>
          {props.children}
          {/* <Card nameRepo={props.name} description={props.descr}/> */}
        </Wrapper>
      </Container>
  );
};