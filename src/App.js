import "./App.css";
import Main from "./Main";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const styleAppCo = styled.div`
  width: 50%;
  margin: 0 auto;
`;

function App() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const handlePage = (value) => {
    setPage(value);
  };
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
    axios
      .get(`https://swapi.dev/api/films/`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <styleAppCo>
      <main>
        <Main data={data} movies={movies} handlePage={handlePage} page={page} />
      </main>
    </styleAppCo>
  );
}
export default App;
