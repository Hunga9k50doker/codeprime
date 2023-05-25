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
import { useIsOverflow } from "hooks/use-is-overflow";
import useTranslation from "next-translate/useTranslation";

const ServiceCard = (props) => {
  const { type, title, description, tech, icon } = props;
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const refDescription = React.useRef();
  const isOverflow = useIsOverflow(refDescription);
  const [isViewMore, setIsViewMore] = React.useState(false);
  const { t } = useTranslation("common");
  const onViewMore = () => {
    if (isViewMore) refDescription.current.scrollTop = 0;
    setIsViewMore(!isViewMore);
  };
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
          ref={refDescription}
          sx={{
            mt: 2,
            pb: 4,
            height: 200,
            overflowY: isViewMore ? "auto" : "hidden",
          }}
        >
          {description}
        </Typography>
        {isOverflow && (
          <Typography
            onClick={onViewMore}
            className={`${smDown ? "d-none" : ""} m-0`}
            sx={{
              fontWeight: 500,
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
