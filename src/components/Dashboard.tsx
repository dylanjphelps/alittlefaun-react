import { Typography, Grid } from "@mui/material";
import gallery from "../assets/gallery.json";

export const Dashboard = () => {
  return (
    <>
      <Typography align="center" variant="h3" sx={{ pt: 4 }}>
        Hello there! 🌱
      </Typography>
      <Typography component="p" variant="body1" sx={{ mx: "10vw", pt: 4 }}>
        I'm alittlefaun - you can call me faun (〃ω〃). I edit text files during
        the week for a living and make plushies during the weekends. I really
        enjoy the process of creating things and having that final product bring
        joy to their owners.
      </Typography>
      <Typography component="p" variant="body1" sx={{ mx: "10vw", pd: 4 }}>
        Please don't hesitate to message me if you have a character that you
        would like me to bring to life!
      </Typography>
      <Grid container spacing={1} sx={{ px: "5vw" }} justifyContent="center">
        {gallery.map((item, index) => (
          <Grid item key={index}>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              style={{ width: "20vw" }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
