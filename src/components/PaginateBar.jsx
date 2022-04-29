import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  justify-content: end;
  margin-top: 31px;
`

const Text = styled.span`
  color: var(--grey-color);
  max-height: 21px;
  font-weight: var(--fw-light);
  font-size var(--fs-small);
  line-height: 21px;
  margin-right: 24px;
`

export const PaginateBar = ({children,reposCount,lastReposIndex,firstReposIndex}) => {
  return (
      <Wrapper>
      <Text>
        {firstReposIndex}-{lastReposIndex} of {reposCount} items 
      </Text>
        {children}
      </Wrapper>
  );
};