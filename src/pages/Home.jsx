import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ offers, setOffers }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://lereacteur-vinted-api.herokuapp.com/offers"
  //         );
  //         setData(response.data);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.log(error.response.data);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <main className="container debug">
      <h2>Page Home</h2>
    </main>
  );
};

export default Home;
