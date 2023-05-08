import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import styled from "styled-components";

const StyledKarakterCo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 0.1rem solid gray;
  align-items: center;
`;

const StyledTextRow = styled.div`
  align-items: center;

  justify-content: space-between;
  color: #f70776;
  text-align: center;
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
        <h2>{karakter.name}</h2>
      </StyledTextRow>
      {detailed && (
        <div>
          <p>Gender: {karakter.gender}</p>
          <p>Height: {karakter.height}</p>
          <p> Mass: {karakter.mass}</p>
          <p>Birth Year: {karakter.birth_year}</p>
          <p>Eye Color: {karakter.eye_color}</p>
          <p>Hair Color: {karakter.hair_color}</p>
          <p>Skin Color: {karakter.skin_color}</p>
          <StyledTextGray>
            Appears in {karakter.films.length} films
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
