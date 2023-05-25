import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import Logo from "../img/logo.svg";
import RouterLink from "next/link";
import { sections, socials } from "assets/database/list-footer";
import useTranslation from "next-translate/useTranslation";
export const Footer = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.50" : "neutral.800",
        borderTopColor: "divider",
        borderTopStyle: "solid",
        borderTopWidth: 1,
        pt: {
          md: 12,
          xs: 6,
        },
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid
            xs={12}
            sm={4}
            md={3}
            sx={{
              order: {
                xs: 4,
                md: 1,
              },
            }}
          >
            <Stack spacing={1}>
              <Stack
                alignItems="center"
                component={RouterLink}
                direction="row"
                display="inline-flex"
                href="#"
                spacing={1}
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    height: 24,
                    width: 24,
                    color: (theme) =>
                      theme.palette.mode === "dark"
                        ? "neutral.800"
                        : "neutral.50",
                  }}
                >
                  <Logo />
                </Box>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                {t("footer_content")}
              </Typography>
              <Stack direction={"row"} spacing={1}>
                {socials.map((social) => (
                  <Link href={social.path} key={social.title}>
                    {social.icon}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
          {sections?.[lang].map((section, index) => (
            <Grid
              key={section.title}
              xs={12}
              sm={4}
              md={3}
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1,
                },
              }}
            >
              <Typography
                color={(theme) =>
                  theme.palette.mode === "dark" ? "neutral.800" : "neutral.50"
                }
                variant="overline"
                fontSize={14}
              >
                {section.title}
              </Typography>
              <Stack
                component="ul"
                spacing={1}
                sx={{
                  listStyle: "none",
                  m: 0,
                  p: 0,
                }}
              >
                {section.items.map((item) => {
                  const linkProps = item?.path
                    ? item.external
                      ? {
                          component: "a",
                          href: item.path,
                          target: "_blank",
                        }
                      : {
                          component: RouterLink,
                          href: item.path,
                        }
                    : {};

                  return (
                    <Stack
                      alignItems="center"
                      direction="row"
                      key={item.title}
                      spacing={2}
                    >
                      {section.isLink ? (
                        <Box
                          sx={{
                            backgroundColor: "primary.main",
                            height: 2,
                            width: 12,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            color: (theme) =>
                              theme.palette.mode === "dark"
                                ? "neutral.800"
                                : "neutral.50",
                            width: 12,
                          }}
                        >
                          {item.icon}
                        </Box>
                      )}

                      <Typography
                        color="text.primary"
                        variant="subtitle2"
                        component={section.isLink ? "a" : ""}
                        {...linkProps}
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "dark"
                              ? "neutral.800"
                              : "neutral.400",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ mt: 6 }} />
        <Typography
          color="text.secondary"
          className="text-center"
          coponent="h6"
          sx={{ py: 3, fontSize: 12 }}
        >
          {t("footer_copyright")}
        </Typography>
      </Container>
    </Box>
  );
};
