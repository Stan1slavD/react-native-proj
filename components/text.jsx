import React from "react";
import styled from "styled-components/native";

const StyledText = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
`;

function Span(props) {
  return (
    <>
      <StyledText {...props}></StyledText>
    </>
  );
}

export default Span;
