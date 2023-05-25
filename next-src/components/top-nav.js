import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Menu01Icon from "@untitled-ui/icons-react/build/esm/Menu01";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { alpha } from "@mui/material/styles";
import Logo from "../img/logo.svg";
import CPIcon from "../img/CP-Icon-Green@1x.svg";
import Link from "next/link";
import { useWindowScroll } from "../hooks/use-window-scroll";
import { TopNavItem } from "./top-nav-item";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import TopNavMobile from "./top-nav-mobile";
import { styled } from "@mui/material/styles";
import { listNav } from "assets/database/list-nav";
import useTranslation from "next-translate/useTranslation";

const NewStyleSelect = styled("div")(({ theme }) => ({
  "&": {
    width: "100%",
  },
  "& .MuiSelect-root": {
    // Customize the root element of the Select component
    justifyContent: "center",
    display: "flex",
  },
  "& .MuiSelect-select": {
    // Customize the select input field
    padding: "8px 16px 8px 32px",
    fontSize: "16px",
    fontWeight: "400",
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      transform: "translateX(-16px)",
    },
  },
};

const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  // const { onMobileNavOpen } = props
  const pathname = usePathname();
  const [elevate, setElevate] = useState(false);
  const offset = 64;
  const delay = 100;
  const languages = [
    { title: "VI", value: "vi", description: "Vietnamese" },
    { title: "EN", value: "en", description: "English" },
  ];
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [locale, setLocale] = useState(lang);
  const [routes, setRoutes] = useState(listNav?.[lang]);
  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  const handleChangeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router;
    setLocale(newLocale.target.value);
    router.push({ pathname, query }, asPath, {
      locale: newLocale.target.value,
    });
  };

  const onMobileNavOpen = () => {};

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });

  useEffect(() => {
    setRoutes(listNav?.[lang]);
  }, [router.locale]);

  return (
    <Box
      component="header"
      sx={{
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        pt: 2,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "transparent",
          borderRadius: 2.5,
          boxShadow: "none",
          transition: (theme) =>
            theme.transitions.create("box-shadow, background-color", {
              easing: theme.transitions.easing.easeInOut,
              duration: 200,
            }),
          ...(elevate && {
            backgroundColor: (theme) =>
              alpha(theme.palette.background.paper, 0.9),
            boxShadow: 8,
          }),
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            height: TOP_NAV_HEIGHT,
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1 }}
          >
            <Stack
              alignItems="center"
              component={Link}
              direction="row"
              display="inline-flex"
              href="/"
              spacing={1}
              sx={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  height: 24,
                  width: 24,
                }}
              >
                <CPIcon height={24} width={24} />
              </Box>
              <Box
                sx={{
                  display: "inline-flex",
                  height: 14,
                }}
              >
                <Logo />
              </Box>
            </Stack>
          </Stack>
          {mdUp && (
            <Stack alignItems="center" direction="row" spacing={2}>
              <Box component="nav" sx={{ height: "100%" }}>
                <Stack
                  component="ul"
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={1}
                  sx={{
                    height: "100%",
                    listStyle: "none",
                    m: 0,
                    p: 0,
                  }}
                >
                  <>
                    {routes.map((item, index) => {
                      const checkPath = !!(item.path && pathname);
                      const partialMatch = checkPath
                        ? pathname.includes(item.path)
                        : false;
                      const exactMatch = checkPath
                        ? pathname === item.path
                        : false;
                      const active = item.popover ? partialMatch : exactMatch;

                      return (
                        <TopNavItem
                          active={active}
                          external={item.external}
                          key={index}
                          path={item.path}
                          popover={item.popover}
                          title={item.title}
                        />
                      );
                    })}
                  </>
                </Stack>
              </Box>
            </Stack>
          )}

          <Stack
            alignItems="center"
            direction="row"
            justifyContent={"flex-end"}
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            {!smDown && (
              <Button
                component={Link}
                size={mdUp ? "medium" : "small"}
                href="/quote/"
                variant="contained"
              >
                {t("get_a_quote", { title: "" })}
              </Button>
            )}

            {mdUp ? (
              <Select
                size="small"
                value={locale}
                label={locale}
                onChange={handleChangeLanguage}
              >
                {languages.map((language, index) => (
                  <MenuItem key={index} value={language.value}>
                    {language.title}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <TopNavMobile
                title={
                  <IconButton onClick={onMobileNavOpen}>
                    <SvgIcon fontSize="small">
                      <Menu01Icon />
                    </SvgIcon>
                  </IconButton>
                }
                pathname={pathname}
                listNav={routes}
                navItemLanguage={
                  <NewStyleSelect>
                    <Select
                      MenuProps={MenuProps}
                      size="small"
                      fullWidth
                      sx={{
                        border: "none",
                        outline: "none",
                        textAlign: "center",
                      }}
                      variant="filled"
                      value={locale}
                      label={locale}
                      onChange={handleChangeLanguage}
                    >
                      {languages.map((language, index) => (
                        <MenuItem
                          key={index}
                          value={language.value}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {language.description}
                        </MenuItem>
                      ))}
                    </Select>
                  </NewStyleSelect>
                }
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
