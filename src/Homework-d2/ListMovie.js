import React, { useState } from "react";
import MovieCard from "./MovieCard";
import data from "./data.json";

function ListMovie() {
  const [movie] = useState(data);
//   console.log(data[1]);

  let renderHTML = () => {
    return movie.map((item, i) => {
        return <MovieCard key={i} imageLink={item.hinhAnh} title={item.tenPhim} text={item.moTa} />;
    });
  };

//   console.log(renderHTML());

  return (
    <section className="movieList">
      <div className="container-fuild bg-light">
        <h1 className="text-center mb-5 ">Sắp Chiếu</h1>
        <div className="row mr-0">{renderHTML()}</div>
      </div>
    </section>
  );
}

export default ListMovie;
