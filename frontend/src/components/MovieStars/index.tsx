import { ReactComponent as StarFull } from "assets/images/star-full.svg";
import { ReactComponent as StarHalf } from "assets/images/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/images/star-empty.svg";
import "./style.css";

const MovieStars = () => {
  function getFills(score: number) {
    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }

    return fills;
  }

  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
};

export default MovieStars;
