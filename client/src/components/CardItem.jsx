function CardItem({ movie, addToCart }) {
  return (
    <>
      <div className="col p-3">
        <div className="card">
          <img
            src={movie.imageUrl}
            className="card-img-top"
            alt="image-poster"
            style={{ height: "300px", objectFit: "cover", padding: "10px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">
              {movie.releaseYear} -{" "}
              <span className="badge text-bg-warning">{movie.genre}</span>
            </p>
            <a
              href="#"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={"#modal" + movie.id}
            >
              Lihat Detail
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={"modal" + movie.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {movie.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                {movie.releaseYear} -{" "}
                <span className="badge text-bg-warning">{movie.genre}</span>
              </p>
              <img
                src={movie.imageUrl}
                className="card-img-top"
                alt="image-poster"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  addToCart(movie);
                }}
                type="button"
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
