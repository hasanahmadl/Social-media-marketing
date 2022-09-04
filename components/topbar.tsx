import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Grid, Link, Paper, Typography } from "@mui/material";
export const TopBar = () => {
  return (
    <Paper
      sx={{
        bgcolor: "#410784",
        color: "white",
        padding: "0.6rem",
        display: "flex",
        marginBottom: "1rem",
      }}
    >
      <Grid container spacing={2} ml={3}>
        <Grid item>
          <Link
            href="https://facebook.com/hasanahmadsw"
            target="_blank"
            display="flex"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            <FacebookRoundedIcon />
            <Typography ml={1}>Facebook</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://facebook.com/hasanahmadsw"
            target="_blank"
            display="flex"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            <InstagramIcon />
            <Typography ml={1}>Instagram</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://facebook.com/hasanahmadsw"
            target="_blank"
            display="flex"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            <WhatsAppIcon />
            <Typography ml={1}>Whatsapp</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={4} display={{ md: "flex", xs: "none" }}>
        <Grid item>
          <Link
            href="tel:00971508838637"
            target="_blank"
            display="flex"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            <PhoneInTalkRoundedIcon />
            <Typography ml={1}>Phone: +971 508838637</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="mailto:hasanahmadsw@gmail.com"
            target="_blank"
            display="flex"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            <MailOutlineRoundedIcon />
            <Typography ml={1}>Email: info@masocial.ae</Typography>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};
