import { Fab, Grid } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import React from "react";
import CardNews from "../component/CardNews";
import { Link } from "react-router-dom";
import Navbars from "../component/Navbars";

const HomePage = () => {
  return (
      <>
        <Navbars />
        <Grid container columnSpacing={2}>
          <Grid item my={3} mx={'auto'}>
            <Link to={"/history"}>
              <Fab color="red" variant="extended">
                <AccessTimeFilledIcon sx={{ mr: 1 }} />
                History Access
              </Fab>
            </Link>
          </Grid>
          <Grid item>
            <CardNews />
          </Grid>
        </Grid>
      </>
  );
};

export default HomePage;
