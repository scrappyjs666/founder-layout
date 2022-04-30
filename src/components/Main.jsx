import styled from 'styled-components';
import { Container } from './Container';


const Wrapper = styled.main` 
  display: grid;
  grid-template-columns: 30% 70%;
  background-color: var(--bgGrey-color);
  padding: 40px 56px;
  overflow: hidden;
`;



export const Main = ({children}) => {
  return (
      <Container>
        <Wrapper>
          {children}
        </Wrapper>
      </Container>
  );
};