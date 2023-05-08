import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const Terms = () => {
  return (
    <>
      <Box sx={{ mx: "10vw" }}>
        <Typography align="center" variant="h2" sx={{ py: 2 }}>
          Terms and Conditions
        </Typography>
        <Typography align="center" variant="subtitle1" sx={{ pb: 2 }}>
          Updated May 7, 2023
        </Typography>
        <Typography>
          A personalized copy of my Terms and Conditions will be attached to the
          PayPal invoice. This is a general version for you to read. Please
          don't hesitate to reach out if you have any questions!
        </Typography>
        <List>
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  1. Age: You are 18 years or older.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  2. Timeline: Commissions take about 2 months after fabric
                  arrival but a completion date is not guaranteed.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  3. Usage: Plushies are intended for display purposes only and
                  are not toys for children. Plushies will not stand up to use
                  outside of intended purpose.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  4. Design: Plushie face design is subject to client approval/
                  input. I can't guarantee 100% accuracy but will use my best
                  effort.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  5. Payment and Shipping: The quote for a commission plus
                  shipping costs and any custom fees is due prior to shipping.
                  Default shipping is via USPS with insurance, tracking, and
                  optionally, signed delivery. I am not responsible for lost or
                  damaged packages.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  7. Refunds/ Cancellations: If a client cancels once any work
                  has been started, the client forfeits half of the commission
                  quote and the other half will be refunded. If I am unable to
                  complete your commission for any reason, I will issue you a
                  full refund.
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{ px: 0 }} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  8. Rights: I may use image of the plush for advertising.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
