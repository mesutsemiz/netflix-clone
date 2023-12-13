import React from "react";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation()
 const movie = location.movie
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        src={movie.trailer}
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
};

export default Watch;
