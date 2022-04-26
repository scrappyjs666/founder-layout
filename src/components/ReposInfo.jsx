import styled from 'styled-components';
import { Container } from './Container';


const Title = styled.h1`
  color: var(--black-color);
  font-weight: var(--fw-bold);
  font-size: var(--fs-large);
  margin-bottom: 29px;
`


export const ReposInfo = (props) => {
  return (
      <Container>
        <Title>{props.Title} ({props.ReposNumber})</Title>
        {props.children}
      </Container>
  );
};