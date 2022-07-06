import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function CardCustom({ movie }) {
  const theme = useTheme();
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <Card
      sx={{
        display: "flex",
        width: 350,
        margin: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={BASE_IMAGE_URL + movie.poster_path}
        alt={movie.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title || movie.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {new Date(movie.release_date || movie.first_air_date).getFullYear()}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Rating
            readOnly
            precision={0.1}
            value={movie.vote_average / 2}
            max={5}
          />
          <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
        </Box>
      </Box>
    </Card>
  );
}
