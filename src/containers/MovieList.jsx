import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";
import CardCustom from "../components/CardCustom";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const data = await tmdb.get("trending/movie/month");
    setMovies(data.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // justifyContent: "space-around",
          mt: 10,
        }}
      >
        {movies.map((data) => (
          <CardCustom movie={data} />
        ))}
      </Box>
    </Container>
  );
}

export default MovieList;
