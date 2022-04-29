import styled from "styled-components";
import Union from './Union.png'
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
  src: Union,
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
      <Circle src = {Union} alt = {'image Repository list is empty'}/>
      <Text>Repository list is empty</Text>
    </Wrapper>
  );
};