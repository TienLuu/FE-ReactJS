import React from "react";
// import PropTypes from "prop-types";

// MovieCard.propTypes = {
//   imageLink: PropTypes.string,
//   title: PropTypes.string,
//   text: PropTypes.string,
// };

// MovieCard.defaultProps = {
//   imageLink: "",
//   title: "",
//   text: "",
// };

function MovieCard(props) {
  const { imageLink, title, text } = props;
  //   console.log(props);

  return (
    <div className="movie--item col-xs-12 col-sm-6 col-md-4 col-lg-4 p-3">
      <div className="container">
        <div className="card mb-3">
          <img
            className="card--img"
            src={imageLink}
            alt="Card"
            style={{ maxWidth: "100%", height: 500 }}
          />
        </div>
        <div className="card--body">
          <h4 className="card---title">{title}</h4>
          <p className="card--text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
