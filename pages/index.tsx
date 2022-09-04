import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { ServiceCard } from "../components/service-card";
import { TopBar } from "../components/topbar";
const Home: NextPage = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Container>
        <Paper sx={{ borderRadius: "0", paddingTop: "6rem" }}>
          <Grid container flexWrap="wrap-reverse">
            <Grid item md={8}>
              <Chip
                label="# Media Art Social"
                sx={{
                  background: "#590E80",
                  color: "white",
                  padding: "0.8rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              />
              <Typography variant="h3" fontWeight="500" paddingTop="1.2rem">
                Grow Your Social <br />
                Media
                <span style={{ color: "#6B0183" }}>.</span>
              </Typography>
              <Typography paddingY="1.5rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Button size="large" variant="outlined">
                Discover More.
              </Button>
            </Grid>
            <Grid
              item
              md={4}
              // display={{ md: "block", xs: "none" }}
            >
              <Image
                src="/undraw_social2.svg"
                alt="work"
                width="400"
                height="300"
              />
            </Grid>
          </Grid>
        </Paper>
        <Divider sx={{ marginY: "4rem" }} />
        <Paper>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <Image
                src="/social_growth.svg"
                alt="work"
                width="400"
                height="300"
              />
            </Grid>
            <Grid item md={7}>
              <Chip
                label="# About Us"
                sx={{
                  background: "#410784",
                  color: "white",
                  padding: "0.8rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              />
              <Typography variant="h4" fontWeight="500" paddingTop="1.2rem">
                Get To Know Us.
              </Typography>
              <Typography paddingY="1.5rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Box display="flex">
                    <IconButton
                      sx={{
                        background: "#410784",
                        ":hover": { background: "#410784" },
                      }}
                      color="inherit"
                    >
                      <QuestionAnswerIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography ml={1} variant="h6" fontWeight="600">
                      Communication
                    </Typography>
                  </Box>
                  <Typography ml={6} color="GrayText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </Typography>
                </Box>
                <Box>
                  <Box display="flex">
                    <IconButton
                      sx={{
                        background: "#410784",
                        ":hover": { background: "#410784" },
                      }}
                      color="inherit"
                    >
                      <TipsAndUpdatesOutlinedIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography ml={1} variant="h6" fontWeight="600">
                      Creativity and Problem-Solving
                    </Typography>
                  </Box>
                  <Typography ml={6} color="GrayText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </Typography>
                </Box>
              </Stack>
              <Box padding="2rem">
                <Button size="large" variant="contained">
                  More About Us.
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Divider sx={{ marginY: "4rem" }} />
        <Paper>
          <Box paddingBottom="2rem">
            <Chip
              label="# Our Services"
              sx={{
                background: "#410784",
                color: "white",
                padding: "0.8rem",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            />
            <Typography variant="h4" fontWeight="500" paddingTop="1.2rem">
              What We Can Do.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <ServiceCard />
            </Grid>
            <Grid item md={3}>
              <ServiceCard />
            </Grid>
            <Grid item md={3}>
              <ServiceCard />
            </Grid>
            <Grid item md={3}>
              <ServiceCard />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
