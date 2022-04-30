import styled from 'styled-components';
import { Container } from './Container';


const Title = styled.h2`
  color: var(--black-color);
  font-weight: var(--fw-bold);
  font-size: var(--fs-large);
  margin-bottom: 29px;
  line-height: 42px;
`


export const ReposInfo = ({title,reposCount,children}) => {
  return (
      <Container>
        <Title>{title} ({reposCount})</Title>
        {children}
      </Container>
  );
};