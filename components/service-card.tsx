import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import { Paper, Typography } from "@mui/material";
const service = {
  title: "Nano Influencers",
  brief:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "/undraw_social.svg",
};
export const ServiceCard = () => {
  return (
    <Paper elevation={1} sx={{ padding: "1.5rem" }}>
      {/* <Image
        src={service.icon}
        alt={service.title}
        width="60px"
        height="60px"
      /> */}
      <AirplayOutlinedIcon sx={{ fontSize: "4rem" }} color="secondary" />
      <Typography variant="h6" paddingY="0.5rem">
        {service.title}
      </Typography>
      <Typography variant="body1" color="GrayText">
        {service.brief}
      </Typography>
    </Paper>
  );
};
