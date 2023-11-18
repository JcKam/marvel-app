import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = ({ offers, setOffers }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/characters");
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="container debug">
      <h2>Page Characters</h2>

      <ul className="list-style-none d-flex flex-wrap">
        {data.results.map((characters, index) => {
          return (
            <li key={characters._id} className="debug2 card">
              <p>{characters.name}</p>
              <img
                className="img"
                src={
                  characters.thumbnail.path +
                  "." +
                  characters.thumbnail.extension
                }
                alt=""
              />
            </li>
          );
        })}
      </ul>

      {/* <p>{data.count}</p> */}

      {/* {data.offers.map(offer)} */}
    </main>
  );
};

export default Characters;
