import styled from 'styled-components';

export const Container = styled.div`
  padding: 4em;
  background: papayawhip;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const TomatoButton = styled(Button)`
  color: whitesmoke;
  background-color: tomato;
`;
