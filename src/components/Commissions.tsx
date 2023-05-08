import {
  Box,
  Typography,
  List,
  ListItem,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import priceguide from "../assets/priceguide.json";

export const Commissions = () => {
  return (
    <>
      <Box sx={{ mx: "10vw" }}>
        <Typography
          align="center"
          variant="h2"
          sx={{
            py: 2,
            wordWrap: "break-word",
          }}
        >
          Commissions
        </Typography>
        <Typography variant="body2" sx={{ pb: 2 }}>
          I open for commissions a couple times a year and select 2-3 project
          per round. Quotes however, are always open and noncommittal - just
          fill out this form, send me a message on Twitter or Instagram!
          <br />
          <br />
          Please do note that commissions are not first-come, first-served and I
          do have limitations on what I make. I do not make NSFW plush or
          extremely detailed characters (i.e. zebra strips).
        </Typography>

        <Typography variant="h4">Process</Typography>
        <Typography variant="h6">Payment</Typography>
        <Typography variant="body2" sx={{ pb: 2 }}>
          Payment is through PayPal invoice and can be paid either in full
          upfront or split into two payments - half prior to starting and the
          remainder plus shipping upon completion.
        </Typography>
        <Typography variant="h6">Material and pattern confirmation</Typography>
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
            <Typography variant="body2">
              Prior to the invoice, I will confirm the plush pattern to be used
              as well as fabric types/ colors.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              Materials that I have used in the past include (but are not
              limited to): minky fabric, faux fur, poly-fil, quilt batting,
              poly-pellets, magnets, foam, cotton fabrics, felt, fleece, and
              plastic or wire armature. Fabric order: Fabric usually takes one
              to two weeks to arrive.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h6">Face design</Typography>
        <Typography variant="body2" sx={{ pb: 2 }}>
          I will ask for your review on the face embroidery/design prior to
          embroidering and make any revisions needed. For the rest of the plush
          I will just follow the reference images that you send.
        </Typography>
        <Typography variant="h6">Completion</Typography>
        <Typography variant="body2" sx={{ pb: 2 }}>
          Plushies generally take about 2 months to complete but I can't
          guarantee completion dates.
        </Typography>
        <Typography variant="h6">Shipping</Typography>
        <Typography variant="body2" sx={{ pb: 2 }}>
          My default shipping method is USPS priority mail with insurance,
          tracking, and optionally, signed delivery. If you'd prefer a different
          shipping method, I can also that as long as it is available in my area
          and also includes insurance and tracking.
        </Typography>

        <Typography variant="h4">Price Guide</Typography>
        <Typography variant="body2" sx={{ pb: 2 }}>
          Right now I offer commissions using premade plush pattern bases. Edits
          can be made for species specific head shape, wings, tongue, tail, etc.
          Below is a general guide but bot all patterns are listed below - if
          it's a plush I've made before or you have a purchasable plush pattern
          you'd like for me to use, I'm down!
          <br />
          <br />
          At this point in time I am not creating custom pattern bases due to
          the amount of time I need invest into the process.
        </Typography>

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {priceguide.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      height="auto"
                      width="100%"
                    ></Box>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">{item.name}</Typography>
                    <List
                      sx={{
                        listStyleType: "disc",
                        pl: 2,
                        "& .MuiListItem-root": {
                          display: "list-item",
                        },
                      }}
                    >
                      {item.information.map((info, index) => (
                        <ListItem key={index}>
                          <Typography component="p" variant="body1">
                            {info}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h4">Shipping</Typography>
        <Typography variant="body2">
          My default shipping method is USPS priority mail with insurance,
          tracking, and optionally, signed delivery. Shipping costs may change
          depending on USPS but generally are around:
        </Typography>
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
            <Typography variant="body2">Plush charms: $6</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">Small plushies: $10-$15</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">Large plushies: $15-$20</Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
