import React from "react";
import Karakter from "./Karakter";
import styled from "styled-components";

const StyleWritGray = styled.p`
  color: black;
  font-size: 2.5rem;
`;
const PageCo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  color: white;
`;
const StylePage = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  background-color: black;
  font-family: monospace;
`;

function Main(props) {
  const { data, movies, handlePage, page } = props;
  console.log(data);
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
      {data &&
        data.map((karakter) => (
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
