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
  background-image: url(${inputimg});
  background-repeat: no-repeat;
  margin: 16px 0 16px 0px;
  border-radius: 6px;
  padding: 9px 0px 9px 40px;
  border: none;
  background-position-x: 3%;
  background-position-y: 45%;
`
const Logo = styled.img`
  float: left;
  margin: 13px 22px 16px 41px;
`
Logo.defaultProps = {
  src: githublogo,
};

export const Header = (props) => {
  return (
      <Container>
        <Wrapper>
          {props.children}
          <Logo/>
          <Input/>
        </Wrapper>
      </Container>
  );
};