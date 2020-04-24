import styled, { createGlobalStyle } from 'styled-components';

export const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
  color: blue;
  /* <Thing> when hovered */
  &:hover {
    color: red;
  }
  & ~ & {
    /* <Thing> as a sibling of <Thing>, but maybe not directly next to it */
    background: tomato;
  }
  & + & {
    /* <Thing> next to <Thing> */
    background: lime;
  }
  &.something {
    /* <Thing> tagged with an additional CSS class ".something" */
    background: orange;
  }
  .something-else & {
    /* <Thing> inside another element labeled ".something-else" */
    border: 1px solid;
  }
`;

export const BlueThing = styled.div`
  && {
    color: blue;
  }
`;

export const GlobalStyle = createGlobalStyle`
div${BlueThing} {
    color: red;
  }
`;
