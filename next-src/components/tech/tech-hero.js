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
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import NinjaTech from "../../img/smoke-bomb.png";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "utils/motion";
import Image from "next/image";
export const TechHero = () => {
  const theme = useTheme();
  const { t } = useTranslation("common");
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
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
          py: "120px",
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
                  sx={{ mb: 2, fontSize: smDown ? 28 : "inherit" }}
                  dangerouslySetInnerHTML={{
                    __html: t("tech_h1"),
                  }}
                ></Typography>
                <Typography
                  color="text.secondary"
                  component="h2"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  {t("tech_subtitle")}
                </Typography>

                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                  sx={{ mt: 2 }}
                >
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
                <Image
                  src={NinjaTech}
                  alt="NinjaTech"
                  width={400}
                  height={400}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};
