import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";

import Image from "next/image";
import Link from "next/link";

interface Props {
  window?: () => Window;
}

const drawerWidth = 280;

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const NavBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src="/mas-logo.jpg" alt="masocial" height="70" width="120" />
      </Typography>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.url}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <AppBar
        position="sticky"
        component="nav"
        sx={{
          background: "transparent",
          display: "flex",
          height: "80px",
          justifyContent: "space-around",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",

          "& a": {
            color: "black",
            fontSize: "1rem",
            fontWeight: "600",
            textAlign: "center",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            ":hover": {
              background: "#6B0183",
              color: "white",
            },
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h1"
            color="primary"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Image src="/mas-logo.jpg" alt="masocial" height="70" width="120" />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <List sx={{ display: "flex" }}>
              {items.map((item) => (
                <Link href={`/${item.url}`} passHref key={item.name}>
                  <Button
                    sx={{
                      ml: 2,
                      // padding: "1rem",
                      transitionDelay: "0.1s",
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </List>
          </Box>
          <Box>
            <Link href="/contact">
              <Button
                color="primary"
                variant="contained"
                sx={{
                  ml: 2,
                  display: { md: "block", xs: "none" },
                  // padding: "1rem",
                  fontSize: "1rem",
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>
          <Box>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: "none" } }}
            >
              <MenuOpenIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Container>
  );
};
