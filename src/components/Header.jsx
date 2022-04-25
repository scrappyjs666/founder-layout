import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.div`
  background-color: var(--main-color);
  height: 73px;
`;



export const Header = (props) => {
  return (
      <Container>
        <Wrapper>
          {/* <CardLogo src={img} alt={name} /> */}
        </Wrapper>
      </Container>
  );
};