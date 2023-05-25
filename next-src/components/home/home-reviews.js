import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper";
import ReviewCard from "components/cards/ReviewCard";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { zoomIn, staggerContainer, fadeIn } from "utils/motion";
import { motion } from "framer-motion";
import { userReviews } from "assets/database/user-reviews";
import useTranslation from "next-translate/useTranslation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export const HomeReviews = () => {
  const theme = useTheme();
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        py: "120px",
        color: "common.dark",
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <motion.div variants={fadeIn("down", "tween", 0.25)}>
              <Typography align="center" color="inherit" variant="h3">
                {t("customer_review_title")}
              </Typography>
            </motion.div>
            <motion.div variants={fadeIn("up", "tween", 0.25)}>
              <Typography
                align="center"
                color="inherit"
                variant="subtitle2"
                component={"h4"}
              >
                {t("customer_review_content")}
              </Typography>
            </motion.div>
          </Stack>
          <Grid alignItems="center" container spacing={3}>
            <Grid xs={12}>
              <motion.div variants={zoomIn(0.2, 0.25)}>
                <Swiper
                  spaceBetween={20}
                  modules={[Navigation, EffectCreative]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                  }}
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: false,
                      translate: [0, 0, -400],
                    },
                    next: {
                      shadow: false,
                      translate: ["100%", 0, 0],
                    },
                  }}
                >
                  {userReviews.map((review, index) => (
                    <SwiperSlide key={index}>
                      <ReviewCard {...review} />
                    </SwiperSlide>
                  ))}
                  <Stack
                    sx={{ position: "relative", mt: 4 }}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <ArrowBackOutlinedIcon
                      className="swiper-button-prev"
                      color="primary"
                    />
                    <ArrowForwardOutlinedIcon
                      className="swiper-button-next"
                      color="primary"
                    />
                  </Stack>
                </Swiper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};
