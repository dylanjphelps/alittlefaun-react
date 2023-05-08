import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const FAQ = () => {
  return (
    <>
      <Box sx={{ mx: "10vw" }}>
        <Typography align="center" variant="h2" sx={{ py: 2 }}>
          FAQ
        </Typography>
        <Typography>
          If your question is not answered here, please feel free to send me a
          message!
        </Typography>
        <List>
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary="How is payment handled?"
              secondary={
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 2,
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                >
                  <ListItem>
                    <Typography variant="body2" color="text.primary">
                      Domestic Commissions (US) - In most cases, payment will be
                      through a PayPal Invoice. If you live in Texas or in a
                      state that I'm required to collect local sales tax, I'll
                      send you a link to a listing on my Big Cartel shop. (Big
                      Cartel collects and remits local sales taxes so I don't
                      need to handle it myself.)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="text.primary">
                      International Commissions - I will create a private
                      listing on Etsy and send the link to you. The price quote
                      will be adjusted to account for Etsy fees.
                    </Typography>
                  </ListItem>
                </List>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary="Do you make ... plushies?"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  As long as there is a pattern that I can purchase to use as a
                  base I'm down to take a look! I enjoy tackling new patterns
                  and sometimes do offer discounts if it's a pattern that I want
                  to try out. My current interest is on CholyKnight's cuddle{" "}
                  <a
                    href="https://www.etsy.com/listing/1365446930/cuddle-plush-animal-sewing-pattern-pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    pattern
                  </a>
                  . I do however have very limited experience with clothing
                  which is also why do I've done very few humanoid plushies.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary="Could you tell me more about your pricing?"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  The finished pictures of plushies you see are not the entire
                  picture. I spend hours creating prototypes to get the right
                  fabric pattern. This is material that doesn't go into the
                  final plush. For a detailed breakdown see my{" "}
                  <a
                    href="https://github.com/alittlefaun/materials"
                    target="_blank"
                    rel="noreferrer"
                  >
                    cost breakdown
                  </a>
                  .
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary="How do you choose your commissions?"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  I choose projects that reflect my current skill level and
                  interests. I don't take on extremely complex designs (zebra
                  stripes, gradients, etc.) I might not have the needed
                  equipment and I also don't want to do experiments while making
                  a plush. Please don't be offended if you're not selected -
                  sometimes I just don't feel I can do your OC justice.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary="Do you offer payment plans?"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Yes! If your commission quote is over $100, I can split it
                  into two payments. Half upfront and half upon completion.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary="Do you make NSFW plushies?"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  No.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
