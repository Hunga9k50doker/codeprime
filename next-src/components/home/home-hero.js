import EyeIcon from "@untitled-ui/icons-react/build/esm/CurrencyDollar";
import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  SvgIcon,
  Typography,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import NinjaHome from "../../img/ninja-01.svg";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "utils/motion";
const HomeCodeSamples = dynamic(
  () => import("./home-code-samples").then((mod) => mod.HomeCodeSamples),
  { ssr: false }
);

export const HomeHero = () => {
  const theme = useTheme();
  const { t } = useTranslation("common");
  const smDown = theme.breakpoints.down("sm");
  const mdDown = theme.breakpoints.down("md");

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
    >
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundImage: 'url("/assets/gradient-bg.svg")',
          pt: "120px",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid xs={12} md={6} item>
              <motion.div variants={fadeIn("right", "tween", 0.5)}>
                <Typography
                  variant="h1"
                  component={"div"}
                  sx={{ mb: 2, [smDown]: { fontSize: 28 } }}
                  dangerouslySetInnerHTML={{ __html: t("sologan_title") }}
                ></Typography>
                <Typography
                  color="text.secondary"
                  component="h2"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  {t("sologan_content")}
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  flexWrap="wrap"
                  spacing={1}
                  sx={{ my: 3 }}
                >
                  <Rating
                    readOnly
                    value={4.8}
                    precision={0.1}
                    max={5}
                    size="large"
                  />
                  <Typography
                    color="text.primary"
                    variant="caption"
                    sx={{ fontWeight: 700 }}
                  >
                    4.8/5
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {t("base_on")} (20+ {t("review_common")})
                  </Typography>
                </Stack>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Button
                    component={Link}
                    href="/quote/"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <EyeIcon />
                      </SvgIcon>
                    }
                    sx={(theme) =>
                      theme.palette.mode === "dark"
                        ? {
                            backgroundColor: "neutral.50",
                            color: "neutral.900",
                            "&:hover": {
                              backgroundColor: "neutral.200",
                            },
                          }
                        : {
                            backgroundColor: "neutral.900",
                            color: "neutral.50",
                            "&:hover": {
                              backgroundColor: "neutral.700",
                            },
                          }
                    }
                    variant="contained"
                  >
                    {t("get_a_quote", { title: t("now_common") })}
                  </Button>
                  <Button color="inherit" component={Link} href="/contact/">
                    {t("contact_us")}
                  </Button>
                </Stack>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <motion.div variants={fadeIn("left", "tween", 0.5)}>
                <NinjaHome width="100%" height="100%" />
              </motion.div>
            </Grid>
          </Grid>

          <Box
            sx={{
              pt: "120px",
              [mdDown]: {
                pt: "240px",
              },
              [smDown]: {
                pt: "20px",
              },
              position: "relative",
            }}
          >
            <Box
              sx={{
                [smDown]: {
                  display: "none",
                },
                overflow: "hidden",
                width: "80%",
                fontSize: 0,
                mt: -2,
                mx: -2,
                pt: 2,
                px: 2,
                "& img": {
                  borderTopLeftRadius: (theme) =>
                    theme.shape.borderRadius * 2.5,
                  borderTopRightRadius: (theme) =>
                    theme.shape.borderRadius * 2.5,
                  boxShadow: 16,
                  width: "100%",
                },
              }}
            >
              <img
                alt=""
                src="/assets/home-thumbnail.jpg"
                loading="lazy"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                position: "absolute",
                right: 0,
                top: 40,
                [smDown]: {
                  overflow: "auto",
                  position: "relative",
                  top: 0,
                },
                "& > div": {
                  height: 460,
                  width: 560,
                },
              }}
            >
              <HomeCodeSamples />
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};
