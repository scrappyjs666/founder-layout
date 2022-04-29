import styled from 'styled-components';
import { Container } from './Container';
import githublogo from './githublogo.png';
import inputimg from './inputimg.svg';

const Wrapper = styled.header`
  background-color: var(--main-color);
  height: 73px;
`;

const Input = styled.input`
  min-width: 500px;
  margin: 16px 0 16px 0px;
  border-radius: 6px;
  padding: 9px 0px 9px 40px;
  color: var(--black-color);
  font-weight: var(--fw-light);
  font-size: var(--fs-small);
  line-height: 17px;
  letter-spacing: 1%;
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
          <Logo/>
          <InputWrapper>
            <Btn onClick={() => findUser()}/>
            <Input placeholder = {'Enter GitHub username'} onChange={event => setinputValue(event.target.value)}/>
          </InputWrapper>
        </Wrapper>
      </Container>
  );
};

