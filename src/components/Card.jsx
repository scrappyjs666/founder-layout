import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  background-color: var(--white-color);
  max-width: 877px;
  border-radius: 6px;
  margin-bottom: 24px; 
`;

const CardListItem = styled.li`
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

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;



export const Card = ({name, description,link}) => {
  return (
    <Wrapper>
    <CardList>
      <CardListItem>
        <CardTitle href= {link} target="_blank">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardListItem>
    </CardList>
    </Wrapper>
  );
};