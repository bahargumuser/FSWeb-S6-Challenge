import React from "react";
import Karakter from "./Karakter";
import styled from "styled-components";

const StyleWritGray = styled.p`
  color: grey;
  font-size: 0.8rem;
`;
const PageCo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;
const StylePage = styled.button`
  border: none;
  color: black;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
`;

function Main(props) {
  const { data, search, movies, handlePage, page } = props;
  const actPage = {
    backgroundColor: "black",
    color: "white,",
  };
  const homePage = [];
  for (let i = 1; i < 10; i++) {
    homePage.push(i);
  }
  return (
    <div>
      <StyleWritGray> Star Wars Major Characters List </StyleWritGray>
      {data
        .filter((karakter) => {
          if (search == "") {
            return karakter;
          } else if (
            karakter.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return karakter;
          }
        })
        .map((karakter) => (
          <Karakter key={karakter.name} karakter={karakter} movies={movies} />
        ))}
      <PageCo>
        {homePage.map((page) => (
          <StylePage
            style={props.page == page ? actPage : {}}
            onClick={() => handlePage(page)}
          >
            {page}
          </StylePage>
        ))}
      </PageCo>
    </div>
  );
}
export default Main;
