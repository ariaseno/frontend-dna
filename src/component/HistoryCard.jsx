import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";


const HistoryCard = () => {
  var data = JSON.parse(localStorage.getItem("history"));

  return (
    <>
      <Box sx={{ width: '40%' }} mx={'auto'}>
          <Stack spacing={2} >
        {data.map((item, index) => {
          return (
              <Card key={index} sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Mac Miller
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={item.image}
                  alt="Live from space album cover"
                />
              </Card>
          );
        })}
        </Stack>
      </Box>
    </>
  );
};

export default HistoryCard;
