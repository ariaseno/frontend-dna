import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setLoading } from "../redux/news";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Link } from "react-router-dom";
import CardLoading from "./CardLoading";

const CardNews = () => {
  const dispatch = useDispatch();

  const [history, setHistory] = React.useState([]);
  
console.log(history);
  const data = useSelector((state) => state.news.allNews);

  const loading = useSelector((state) => state.news.loading);

  const toDate = (datenow) => {
    return format(datenow, "eee, dd MMMM HH:mm", { locale: id });
  };

  const truncateString = (str, num)=>{
    if (str?.length <= num) {
      return str
    }
    return str?.slice(0, num) + '...'
  }

  const clickNews = (image, title, url)=>{
    setHistory((data)=>[...data, {image:image, title: title, url: url}])
    console.log(image, title, url);
    // localStorage.setItem('history', JSON.stringify(history));
  }
  useEffect(() => {
    dispatch(fetchNews());
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [dispatch]);

  return (
    <>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {!loading ? (
          data.length !== 0 ? (
            data.map((item, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Link
                    to={`${item.url}`}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    
                  >
                    <Card
                    onClick={()=>{clickNews(`${item.urlToImage}`,`${item.title}`,`${item.url}`)}}
                      sx={{
                        maxWidth: 345,
                        minHeight: "100%",
                        position: "relative",
                        boxShadow: 3,
                        ":hover": {
                          boxShadow: 20,
                        },
                      }}
                      
                    >
                      <CardActionArea>
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            height="194"
                            image={item.urlToImage}
                            sx={{
                              ":hover": {
                                width: "120%",
                              },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                              width: '100%',
                              bgcolor: "rgba(0, 0, 0, 0.50)",
                              color: "white",
                              padding: "10px",
                              ":hover": {
                                bgcolor: "rgba(0, 0, 0, 0.90)"
                              },
                            }}
                          >
                            <Typography variant="body2" sx={{ padding: 1, marginRight: 1}} >
                              {item.title}
                            </Typography>
                          </Box>
                        </Box>
                        <CardContent sx={{mb: 2}}>
                          <Typography variant="subtitle1">
                            {item.source.name ? item.source.name : "Anonymous"}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {truncateString(item.description, 100)} 
                          </Typography>
                          <Typography variant="caption">
                            by 
                            <span>
                              {item.author ? " "+item.author : " Anonymous"}
                            </span>
                          </Typography>

                          <Typography
                            variant="caption"
                            mr={2}
                            px={1}
                            fontStyle={"italic"}
                            bgcolor={"rgba(0, 0, 0, 0.20)"}
                            sx={{ borderRadius: '16px', position: "absolute", bottom: 0, right: 0 }}
                            gutterBottom
                            textAlign={"end"}
                          >
                            {toDate(item.publishedAt)}
                          </Typography>
                          
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              );
            })
          ) : (
            <div>Kosong</div>
          )
        ) : (
          <CardLoading length={Object.keys(data).length} md={4} lg={3} />
        )}
      </Grid>
    </>
  );
};

export default CardNews;
