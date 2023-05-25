import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";

export default function ReviewCard(props) {
  return (
    <Card
      sx={{
        maxHeight: 410,
        background: "transparent",
      }}
    >
      <Image
        width={140}
        height={140}
        style={{
          borderRadius: "50%",
          margin: "auto",
          transform: "translateY(50%)",
        }}
        alt={props.username}
        src={props.image}
      />
      <CardContent
        sx={{
          pt: 12,
          borderRadius: "16px",
          background:
            "linear-gradient(to bottom, transparent, #fff, #fff, #fff)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {props.username}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textOverflow={"ellipsis"}
        >
          "{props.description}"
        </Typography>
        <Rating
          name="read-only"
          value={props.rating}
          sx={{ mx: "auto", textAlign: "center", mt: 2 }}
          readOnly
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </CardContent>
    </Card>
  );
}

ReviewCard.propTypes = {
  username: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
};
