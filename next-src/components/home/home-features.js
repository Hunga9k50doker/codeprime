import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkExternal01Icon from "@untitled-ui/icons-react/build/esm/LinkExternal01";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeIn } from "utils/motion";
import { features } from "assets/database/list-features";
import useTranslation from "next-translate/useTranslation";

export const HomeFeatures = () => {
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
                {t("run_project_title")}
              </Typography>
            </motion.div>
            <motion.div variants={fadeIn("up", "tween", 0.25)}>
              <Typography
                align="center"
                color="inherit"
                variant="subtitle2"
                component={"h4"}
              >
                {t("run_project_content")}
              </Typography>
            </motion.div>
          </Stack>
          <Grid alignItems="center" container spacing={3}>
            <Grid xs={12} md={6}>
              <motion.div variants={fadeIn("right", "tween", 0.25)}>
                <Stack spacing={1}>
                  {features?.[lang].map((feature, index) => {
                    const isActive = activeFeature === index;

                    return (
                      <Box
                        key={feature.id}
                        onClick={() => setActiveFeature(index)}
                        sx={{
                          borderRadius: 2.5,
                          color: "neutral.400",
                          cursor: "pointer",
                          p: 3,
                          transition: (theme) =>
                            theme.transitions.create(
                              ["background-color, box-shadow", "color"],
                              {
                                easing: theme.transitions.easing.easeOut,
                                duration:
                                  theme.transitions.duration.enteringScreen,
                              }
                            ),
                          ...(isActive && {
                            backgroundColor: "primary.alpha12",
                            boxShadow: (theme) =>
                              `${theme.palette.primary.main} 0 0 0 1px`,
                            color: "common.white",
                          }),
                          "&:hover": {
                            ...(!isActive && {
                              backgroundColor: "primary.alpha4",
                              boxShadow: (theme) =>
                                `${theme.palette.primary.main} 0 0 0 1px`,
                              color: "common.white",
                            }),
                          },
                        }}
                      >
                        <Typography color="inherit" sx={{ mb: 1 }} variant="h5">
                          {feature.title}
                        </Typography>
                        <Typography color="inherit" variant="body2">
                          {feature.description}
                        </Typography>
                        {feature.id === "figma" && (
                          <Box sx={{ mt: 3 }}>
                            <Button
                              color="success"
                              component="a"
                              endIcon={
                                <SvgIcon fontSize="small">
                                  <LinkExternal01Icon />
                                </SvgIcon>
                              }
                              href="https://www.figma.com/file/xrx6uDljzsWuDZiuz3ITCp/Devias-Kit-Pro-UI-6.0-Master"
                              size="small"
                              target="_blank"
                              variant="contained"
                            >
                              {t("preview_in_figma")}
                            </Button>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Stack>
              </motion.div>
            </Grid>

            <Grid xs={12} md={6}>
              <motion.div variants={fadeIn("left", "tween", 0.25)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature ? activeFeature : "empty"}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={image}
                      alt="not found"
                      width={"100%"}
                      height={"100%"}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};
