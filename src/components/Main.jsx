import styled from 'styled-components';
import { Container } from './Container';


const Wrapper = styled.div` 
  display: grid;
  grid-template-columns: repeat(2, 30% 70%);
  background-color: var(--bgGrey-color);
  padding: 40px 56px;
  height: 768px;
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