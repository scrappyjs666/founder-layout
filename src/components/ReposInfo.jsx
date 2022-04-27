import styled from 'styled-components';
import { Container } from './Container';


const Title = styled.h1`
  color: var(--black-color);
  font-weight: var(--fw-bold);
  font-size: var(--fs-large);
  margin-bottom: 29px;
`


export const ReposInfo = ({title,reposNumber,children}) => {
  return (
      <Container>
        <Title>{title} ({reposNumber})</Title>
        {children}
      </Container>
  );
};