import styled from "styled-components";
import listEmpty from './images/listEmpty.png'
const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Circle = styled.img`
  margin-bottom: 48px;
`
Circle.defaultProps = {
  src: listEmpty,
};

const Text = styled.span`
  font-weight: var(--fw-light);
  font-size: 22px;
  line-height: 31px;
  color: var(--grey-color);
`

export const RepositoryEmpty = () => {
  return (
    <Wrapper>
      <Circle src = {listEmpty} alt = {'image Repository list is empty'}/>
      <Text>Repository list is empty</Text>
    </Wrapper>
  );
};