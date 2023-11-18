import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comics = ({ offers, setOffers }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/comics");
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
      <h2>Page Comics</h2>

      <ul className="list-style-none d-flex flex-wrap">
        {data.results.map((comics, index) => {
          return (
            <li key={comics._id} className="debug2 card">
              <p>{comics.title}</p>
            </li>
          );
        })}
      </ul>

      {/* <ul>
        {data.map((comics) => {
          return (
            <li key={comics._id} className="debug">
              <Link to={"/comics/" + comics._id} className="card">
                <h3>{comics.product_name}</h3>
                <img
                  className="img"
                  src={comics.product_image.secure_url}
                  alt=""
                />
                <p>{comics._id}</p>
              </Link>
            </li>
          );
        })}
      </ul> */}

      {/* <p>{data.count}</p> */}

      {/* {data.offers.map(offer)} */}
    </main>
  );
};

export default Comics;
