import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  animation: ${rotate} 2s linear infinite;
  /* background-color: ${({ primary }) => primary ? "Green" : "white"}; */
  background-color: ${(props) => props.theme.colors.primary || "white"};
  color: ${({ primary }) => primary ? "white" : "Green"};
  font-size: 1em;
  margin: 5rem;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  ${({ primary }) =>
    primary && css`
      background-color: green;
      color: white;
    `}
  ${({ secondary }) =>
    secondary && css`
      background-color: pink;
      color: white;
      border: 2px solid pink;
    `}
`;

const BigButton = styled(Button)`
  font-size: 3rem;

  &:hover {
    background-color: white;
    color: black;
  }

  li {
    color: red;
  }
  
  .link {
     color: red;
  }
`;

const Link = styled.a.attrs({
  target:"_blank",
})`
  color: red;
`;

/* const GlobalStyle = createGlobalStyle({
  body:{
    background: "black",
  },
}) */

function App() {
  return (
    <div>
      <Button as="a" href="https://google.com">
        Normal Button
      </Button>
      <Button primary>Primary</Button>
      <Button secondary>Primary</Button>
      <BigButton secondary>Primary</BigButton>
      <BigButton primary>Primary</BigButton>
      <BigButton primary>
        <li>
          <a className="link" href="">This is Link</a>
        </li>
      </BigButton>
      </div>
  )
}

export default App;
