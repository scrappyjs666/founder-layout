import styled from "styled-components";
import { Container } from './Container';
import loupe from './loupe.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
const ImageLoupe = styled.img `
  margin-bottom: 47px;
`
ImageLoupe.defaultProps = {
  src: loupe,
};

const Text = styled.h1`
  max-width: 210px;
  font-weight: var(--fw-light);
  font-size: 22px;
  line-height: 31px;
  color: var(--grey-color);
  text-align: center;
`

export const StartSearching = () => {
  return (
    <Container>
      <Wrapper>
        <ImageLoupe alt = {'image Start with searching a GitHub user'}/>
        <Text>Start with searching a GitHub user</Text>
      </Wrapper>
    </Container>
  );
};