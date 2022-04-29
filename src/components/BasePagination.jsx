import styled from "styled-components";
import { useState } from "react";


const Number = styled.li`
  display: flex;
  justify-content: end;
  font-weight: var(--fw-light);
  font-size var(--fs-small);
  line-height: 21px;
  color: var(--greyPagination-color);
  margin-right: 16px;
  cursor: pointer;
`


export const BasePagination = ({number}) => {
  const [color, setColor] = useState('');
  return (
      <Number className={color}>{number}</Number>
  );
};