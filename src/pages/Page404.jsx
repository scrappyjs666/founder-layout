import styled from "styled-components";

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
const Text = styled.span`
  font-weight: var(--fw-light);
  font-size: 32px;
  line-height: 31px;
  color: var(--grey-color);
  text-align: center;
`

export const Page404 = () => {
  return (
      <Wrapper>
        <Text>404 Page Not Found</Text>
      </Wrapper>
  );
};