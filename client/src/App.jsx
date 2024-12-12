import { useState, useEffect } from "react";
import "./App.css";
import CartItem from "./components/CartItem";
import CardItem from "./components/CardItem";

function App() {
  //? ngambil data
  const [dataMovies, setDataMovies] = useState([]);

  async function getData() {
    const url = "http://localhost:3000/movies";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataMovies(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // isinya
    getData();
  }, []);

  //? handle cart
  const [cart, setCart] = useState([]);

  function addToCart(movie) {
    setCart([...cart, movie]);
  }

  return (
    <>
      {/* navbar */}
      <nav className="navbar bg-warning">
        <div className="container d-flex">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Cart - {cart.length}
          </button>
        </div>
      </nav>

      <div className="container py-5">
        <div className="d-flex justify-content-center">
          <img
            src="/winter.jpg"
            alt=""
            style={{ height: "300px", width: "768px", objectFit: "cover" }}
          />
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {dataMovies.map((movie, index) => {
            return <CardItem movie={movie} key={index} addToCart={addToCart} />;
          })}
        </div>
      </div>

      {/* drawer */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          {cart.map((el, i) => {
            return <CartItem cart={el} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
