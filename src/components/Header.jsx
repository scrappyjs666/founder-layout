import styled from 'styled-components';
import { Container } from './Container';
import githublogo from './githublogo.png';
import inputimg from './inputimg.svg';

const Wrapper = styled.div`
  background-color: var(--main-color);
  height: 73px;
`;

const Input = styled.input`
  min-width: 500px;
  margin: 16px 0 16px 0px;
  border-radius: 6px;
  padding: 9px 0px 9px 40px;
  border: none;
`
const Logo = styled.img`
  float: left;
  margin: 13px 22px 16px 41px;
`
Logo.defaultProps = {
  src: githublogo,
};

const InputWrapper = styled.div`
  position: relative;
`

const Btn = styled.img`
  position: absolute;
  top: 40%;
  left: 9%;
  z-index: 1;
  cursor: pointer;
`
Btn.defaultProps = {
  src: inputimg,
};

export const Header = ({findUser, setinputValue, children}) => {
  return (
      <Container>
        <Wrapper>
          {children}
          <InputWrapper>
            <Btn onClick={() => findUser()}/>
            <Logo/>
            <Input onChange={event => setinputValue(event.target.value)}/>
          </InputWrapper>
        </Wrapper>
      </Container>
  );
};

