import React from "react";
import HistoryCard from "../component/HistoryCard";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Navbars from "../component/Navbars";

const History = () => {
  return (
    <>
      <Navbars />
      <Link to={"/"}>
        <Fab color="red" variant="extended" sx={{mt: 1}}>
          <ArrowBackIosIcon sx={{ mr: 1 }} />
          Back
        </Fab>
      </Link>
      <HistoryCard />
    </>
  );
};

export default History;
