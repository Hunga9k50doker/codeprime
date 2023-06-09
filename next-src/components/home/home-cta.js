import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { fadeIn, zoomIn, staggerContainer } from "utils/motion";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
export const HomeCta = () => {
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        backgroundColor: "neutral.800",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        color: "neutral.100",
        py: "120px",
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
                {t("start_saving_title")}
              </Typography>
            </motion.div>
            <motion.div variants={fadeIn("up", "tween", 0.25)}>
              <Typography
                align="center"
                color="inherit"
                variant="subtitle2"
                component={"h4"}
              >
                {t("start_saving_content")}
              </Typography>
            </motion.div>
          </Stack>
          <motion.div variants={zoomIn(0.2, 0.25)}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="center"
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Button
                component="a"
                href="https://mui.com/store/items/devias-kit-pro"
                target="_blank"
                variant="contained"
              >
                {t("purchase_now")}
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </motion.div>
    </Box>
  );
};
