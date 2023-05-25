import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Divider,
  Rating,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "utils/motion";
import { features } from "assets/database/list-features";
import useTranslation from "next-translate/useTranslation";
import { projects } from "assets/database/list-projects";
import ProjectCard from "components/cards/ProjectCard";
import { WrapPurchase } from "components/wrapPurchase";

export const PortfolioProjects = () => {
  const theme = useTheme();
  const { t, lang } = useTranslation("common");
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = features?.[lang][activeFeature];
  const image =
    theme.palette.mode === "dark" ? feature?.imageDark : feature?.imageLight;

  return (
    <motion.div
      initial="hidden"
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
                {t("portfolio_projects_title")}
              </Typography>
            </motion.div>
            <motion.div variants={fadeIn("up", "tween", 0.25)}>
              <Typography
                align="center"
                color="inherit"
                variant="subtitle2"
                component={"h4"}
              >
                {t("portfolio_projects_description")}
              </Typography>
            </motion.div>
          </Stack>
          <Grid container spacing={3}>
            {projects?.[lang].map((project, index) => (
              <Grid key={index} xs={12} md={6} lg={4}>
                <motion.div variants={zoomIn(0.2, 0.5)}>
                  <ProjectCard {...project} />
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
