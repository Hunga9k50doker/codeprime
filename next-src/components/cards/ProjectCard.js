import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import useTranslation from "next-translate/useTranslation";

const ProjectCard = (props) => {
  const { image, link, title, description } = props;
  const { t } = useTranslation("common");
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        minWidth: 300,
        minHeight: 300,
        background: `url(${image})`,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        "&:hover .MuiCardContent-root": {
          right: 0,
        },
      }}
    >
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          right: "-100%",
          width: "100%",
          height: "100%",
          background: "#1f3d4799",
          backdropFilter: "blur(20px)",
          transition: "0.5s",
        }}
      >
        <Stack
          spacing={2}
          alignItems={"stretch"}
          sx={{
            height: "100%",
          }}
        >
          <Typography
            variant="h5"
            className="text-center"
            color={"common.white"}
          >
            {title}
          </Typography>
          <Typography
            color={"common.white"}
            className={smDown ? "" : "x-line-clamp-6"}
            sx={{
              flex: 1,
              overflowY: smDown ? "auto" : "hidden",
            }}
          >
            {description}
          </Typography>
          <Button
            component="a"
            href={link}
            target="_blank"
            variant="contained"
            // color="neutral.50"
            size="sm"
            fullWidth
          >
            {t("view_project_title")}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
export default ProjectCard;
