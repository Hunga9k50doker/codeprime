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
import { useIsOverflow } from "hooks/use-is-overflow";

const ProjectCard = (props) => {
  const { image, link, title, description } = props;
  const { t } = useTranslation("common");
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const refDescription = React.useRef();
  const isOverflow = useIsOverflow(refDescription);
  const [isViewMore, setIsViewMore] = React.useState(false);
  const onViewMore = () => {
    setIsViewMore(!isViewMore);
  };

  return (
    <Card
      sx={{
        minWidth: 300,
        minHeight: 300,
        background: `url(${image})`,
        overflow: "hidden",
        position: "relative",
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
              overflowY: smDown ? "auto" : isViewMore ? "auto" : "hidden",
            }}
            ref={refDescription}
          >
            {description}
          </Typography>
          {isOverflow && (
            <Typography
              onClick={onViewMore}
              color={"common.white"}
              className={`${smDown ? "d-none" : ""} m-0`}
              sx={{
                width: "fit-content",
                mt: "0px !important",
                p: 0,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {isViewMore
                ? `[${t("view_less_title")}]`
                : `[${t("view_more_title")}]`}
            </Typography>
          )}
          <Button
            component="a"
            href={link}
            target="_blank"
            variant="contained"
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
