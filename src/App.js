import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWchars, setstarWchars] = useState();
  let showList = false;

  if (starWchars) {
    showList = true;
  } else {
    showList = false;
  }

  function GetAPIData(sParam) {
    useEffect(() => {
      axios
        .get("https://swapi.dev/api/people", {
          params: {
            search: sParam,
          },
        })
        .then((res) => {
          setstarWchars(res.data.results);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }, []);
    function makeaSearch(e) {
      //event olduğu için e yazabildik
      //setParam(e.target.value);
      console.log(e.target.value);
      GetAPIData(e.target.value);
    }
    useEffect(() => {
      GetAPIData();
    }, []);

    return (
      <div className="App">
        <h1 className="Header">Karakterler</h1>
        <form>
          <input type="text" placeHolder="Search" onChange={makeaSearch} />
        </form>
        return ({!starWchars && <div> Arama yapınız. </div>}
        {starWchars && (
          <ul>
            {starWchars?.map((b) => (
              <li>{b.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
};

export default App;
