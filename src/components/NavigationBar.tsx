import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Commissions",
    path: "/commissions",
  },
  {
    name: "Terms and Conditions",
    path: "/terms",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        .:alittlefaun plush:.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.path} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar sx={{ alignSelf: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: (theme: Theme) => theme.palette.text.primary,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            noWrap={true}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: (theme: Theme) => theme.palette.text.primary,
            }}
          >
            .:alittlefaun plush:.
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                href={item.path}
                key={item.name}
                sx={{ color: (theme: Theme) => theme.palette.text.primary }}
              >
                <Typography variant="h6">{item.name}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </>
  );
};
