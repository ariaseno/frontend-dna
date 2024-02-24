import { Card, CardActionArea, CardContent, Grid, Skeleton } from "@mui/material";
import React from "react";

const CardLoading = ({length, md, lg}) => {
  var rows = [];
  for (var i = 0; i < length; i++) {
    rows.push(
      <Grid key={i} item xs={12} sm={6} md={md} lg={lg}>
        <Card sx={{ maxWidth: 345, height: "100%" }}>
          <CardActionArea sx={{ height: "100%" }}>
            <Skeleton
              sx={{ height: 194 }}
              animation="wave"
              variant="rectangular"
            />
            <CardContent sx={{mb: 2}}>
              <Skeleton animation="wave" height={20} sx={{ marginBottom: 2 }} />
              <Skeleton animation="wave" height={20} sx={{ marginBottom: 2 }} />
              <Skeleton animation="wave" height={20} sx={{ marginBottom: 2 }} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  return <>{rows}</>;
};

export default CardLoading;
