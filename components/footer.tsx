/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
export const Footer = () => {
  return (
    <Container
      sx={{
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      <Divider />
      <Paper sx={{ paddingTop: "2rem" }}>
        <Grid container spacing={2} flexWrap="wrap-reverse">
          <Grid item md={8}>
            <Box paddingY="1rem">
              <Image src="/mas-logo.jpg" alt="logo" height="100" width="180" />
              <Typography variant="body2" fontSize="1rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>
            <Box>
              <a href="https://google.com" target="_blanck">
                <Facebook color="primary" fontSize="large" />
              </a>
              <a
                href="https://google.com"
                target="_blanck"
                style={{
                  marginLeft: "1rem",
                }}
              >
                <Instagram color="primary" fontSize="large" />
              </a>
              <a
                href="https://google.com"
                target="_blanck"
                style={{
                  marginLeft: "1rem",
                }}
              >
                <LinkedIn color="primary" fontSize="large" />
              </a>
            </Box>
            <Box paddingTop="2rem">
              <Typography variant="body2" fontWeight="bold">
                All Rights Reserved @ MASOCIAL.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <img
              src="/undraw_social.svg"
              alt="masocial"
              width="320px"
              height="320px"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
