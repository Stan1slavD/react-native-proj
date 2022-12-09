import React from "react";
import styled from "styled-components/native";

const StyledDiv = styled.View`
display: ${(props) => props.display};
color: ${(props)=> props.color};
background-color: ${(props)=> props.bc};
flex-direction: ${(props)=> props.fd};
`;

function Div(props) {
  return (
    <>
      <StyledDiv {...props}></StyledDiv>
    </>
  );
}

export default Div;
