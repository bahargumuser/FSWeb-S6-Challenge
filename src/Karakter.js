import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import styled from "styled-components";

const StyledKarakterCo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 0.1rem solid gray;
`;

const StyledTextRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const StyledTextGray = styled.p`
  color: grey;
  font-size: 0.8rem;
`;

function Karakter(props) {
  const { karakter, movies } = props;
  const [detailed, setDetailed] = useState(false);
  const handleDetailed = () => {
    setDetailed(!detailed);
  };
  const characterMovies = [];
  for (let i = 0; i < movies.length; i++) {
    for (let k = 0; k < karakter.films.length; k++) {
      if (movies[i]["url"] == karakter.films[k]) {
        characterMovies.push(movies[i]);
      }
    }
  }
  return (
    <StyledKarakterCo>
      <StyledTextRow onClick={handleDetailed}>
        <h2>{Karakter.name}</h2>
      </StyledTextRow>
      {detailed && (
        <div>
          <p>Gender: {Karakter.gender}</p>
          <p>Height: {Karakter.height}</p>
          <p> Mass: {Karakter.mass}</p>
          <p>Birth Year: {Karakter.birth_year}</p>
          <p>Eye Color: {Karakter.eye_color}</p>
          <p>Hair Color: {Karakter.hair_color}</p>
          <p>Skin Color: {Karakter.skin_color}</p>
          <StyledTextGray>
            Appears in {Karakter.films.length} films
          </StyledTextGray>
          {characterMovies.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </div>
      )}
    </StyledKarakterCo>
  );
}
export default Karakter;
