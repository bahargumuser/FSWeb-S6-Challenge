import React, { useState } from "react";
import styled from "styled-components";

const StyleMovieCo = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  border-bottom: 0.1rem solid gray;
`;
const StyleTextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyleArr = styled.img`
  width: 1rem;
  height: 1rem;
`;
function Movie(props) {
  const { movie } = props;
  const [detailed, setDetalied] = useState(false);
  const handleDetailed = () => {
    setDetalied(!detailed);
  };
  return (
    <StyleMovieCo>
      <StyleTextRow onClick={handleDetailed}>
        <p>{movie.title}</p>
      </StyleTextRow>
      {detailed && (
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      )}
    </StyleMovieCo>
  );
}
export default Movie;
