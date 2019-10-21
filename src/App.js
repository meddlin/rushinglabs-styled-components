import React from 'react';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled.button`
  color: ${(props) => { 
      if (props.customColor === 'yellow')
        return 'white';

      return props.customColor;
    } 
  };
  background-color: black;
  padding: 10px;
`;

function App() {
  const handleClick = () => {
    alert('clicked it!');
  }

  return (
    <div className="App">
      <StyledButton 
        onClick={handleClick}
        customColor='yellow'>Click me!</StyledButton>
    </div>
  );
}

export default App;
