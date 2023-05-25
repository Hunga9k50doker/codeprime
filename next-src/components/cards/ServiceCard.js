import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";

const ServiceCard = (props) => {
  const { type, title, description, tech, icon } = props;
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        title={
          <Typography
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              fontSize: 12,
              mb: 1,
            }}
          >
            {type}
          </Typography>
        }
        subheader={
          <Typography variant="h5" sx={{ height: 85 }}>
            {title}
          </Typography>
        }
      ></CardHeader>
      <Divider />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          pt: 0,
        }}
      >
        <Typography
          className={smDown ? "" : "x-line-clamp-7"}
          sx={{
            mt: 2,
            height: 200,
            overflowY: smDown ? "auto" : "hidden",
          }}
        >
          {description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography color="text.secondary">{tech}</Typography>
          <Stack
            sx={{
              width: "80px",
              height: "64px",
              color: "primary.main",
            }}
            alignItems={"center"}
          >
            {icon}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
