import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "utils/motion";
import useTranslation from "next-translate/useTranslation";
import { techs } from "assets/database/list-techs";
import ServiceCard from "components/cards/ServiceCard";
import { WrapPurchase } from "components/wrapPurchase";
import { projects } from "assets/database/list-projects";
import ProjectCard from "components/cards/ProjectCard";
export const TechServices = () => {
  const { t, lang } = useTranslation("common");
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div
      initial={smDown ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer}
    >
      <Box
        sx={{
          backgroundColor: "neutral.800",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundImage: 'url("/assets/gradient-bg.svg")',
          color: "common.white",
          py: "120px",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ mb: 8 }}>
            <motion.div variants={fadeIn("down", "tween", 0.25)}>
              <Typography align="center" color="inherit" variant="h3">
                {t("tech_services_title")}
              </Typography>
            </motion.div>
            <motion.div variants={fadeIn("up", "tween", 0.25)}>
              <Typography
                align="center"
                color="inherit"
                variant="subtitle2"
                component={"h4"}
              >
                {t("tech_services_description")}
              </Typography>
            </motion.div>
          </Stack>
          <Grid container spacing={3}>
            {techs?.[lang].map((tech, index) => (
              <Grid key={index} xs={12} md={6} lg={4} alignItems={"stretch"}>
                <motion.div variants={fadeIn("up", "tween", 0.25)}>
                  <ServiceCard {...tech} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <WrapPurchase backgroundColor="neutral.50" color="neutral.800" />
    </motion.div>
  );
};
