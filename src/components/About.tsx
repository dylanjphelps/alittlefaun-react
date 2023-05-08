import { Box, Grid, Typography } from "@mui/material";
import profile from "../assets/avatar.json";

export const About = () => {
  return (
    <>
      <Typography align="center" variant="h2" sx={{ py: 2 }}>
        About Me
      </Typography>
      <Grid container spacing={2} sx={{ px: "10vw", py: 4 }}>
        <Grid item xs={6} md={8}>
          <Typography variant="body1">
            I'm alittlefaun and am a small plush maker during the weekends! I
            really enjoy plush making because I can really flex my love of{" "}
            <b>creation</b> as well as create a bit more <b>happiness</b> into
            the world by bringing people's characters to life through plushies.
            <br />
            <br />
            Other things that I enjoy during my free time are cooking, watching{" "}
            <b>anime</b>, and a bit of light gaming. Some of my favorites
            include: Made in Abyss, Shield Hero, That Time I Got Reincarnated as
            a Slime, and Natsume's Book of Friends.
            <br />
            <br />
            If you have any questions, definitely feel free to reach out! I'd
            like to think I'm a pretty <b>friendly</b> and open person so don't
            worry! (´・ω・｀)
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box
            component="img"
            src={profile.image}
            height="auto"
            width="100%"
            style={{ alignSelf: "center" }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};
