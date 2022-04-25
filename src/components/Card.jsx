import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  background-color: var(--white-color);
  max-width: 877px;
  border-radius: 6px;
  grid-column-start: 2;
  margin-bottom: 24px; 
`;
const CardText = styled.div`
  padding: 24px 32px;
`


const CardTitle = styled.a `
  color: var(--main-color);
  font-weight: var(--fw-normal);
  font-size: var(--fs-24);
  line-height: 29px;                     
`
const CardDescription = styled.div `
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-16);
  line-height: 19px;
  margin-top: 16px;                       
`

export const Card = (props) => {
  return (
    <Wrapper>
      <CardText>
        <CardTitle>{props.nameRepo}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        {/* <CardLogo src={props.img} alt={props.name} />  */}
      </CardText>
    </Wrapper>
  );
};