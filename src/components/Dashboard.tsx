import { Typography, Box, Card, CardMedia } from "@mui/material";
import gallery from "../assets/gallery.json";

export const Dashboard = () => {
  return (
    <>
      <Typography align="center" variant="h3" sx={{ pb: 4 }}>
        Hello there! 🌱
      </Typography>
      <Typography component="p" variant="body1" sx={{ mx: "10vw", pb: 4 }}>
        I'm alittlefaun - you can call me faun (〃ω〃). I edit text files during
        the week for a living and make plushies during the weekends. I really
        enjoy the process of creating things and having that final product bring
        joy to their owners.
        <br />
        <br />
        Please don't hesitate to message me if you have a character that you
        would like me to bring to life!
      </Typography>
      <Box
        sx={{
          mx: "10vw",
          display: "Flex",
          flexWrap: "wrap",
          gap: 2,
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gallery.map((item, index) => (
          <Card variant="outlined" sx={{ maxWidth: 350 }} key={index}>
            <CardMedia
              component="img"
              width={350}
              image={item.image}
              alt={item.name}
            />
          </Card>
        ))}
      </Box>
    </>
  );
};
