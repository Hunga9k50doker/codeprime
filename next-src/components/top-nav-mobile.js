import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import PropTypes from "prop-types";
import { TopNavItem } from "./top-nav-item";
import { ButtonBase, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const TopNavMobile = (props) => {
  const { title, listNav, pathname, navItemLanguage } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      style={{ position: "relative" }}
    >
      <motion.div whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </motion.div>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "100%",
          right: 0,
          width: "320px",
          overflowY: "auto",
        }}
      >
        <Stack
          component="ul"
          alignItems="center"
          justifyContent="center"
          direction="column"
          bgcolor="white"
          spacing={1}
          sx={{
            height: "100%",
            listStyle: "none",
            mt: 2,
            p: 0,
            overflow: "hidden",
          }}
        >
          {listNav.map((item) => {
            const checkPath = !!(item.path && pathname);
            const partialMatch = checkPath
              ? pathname.includes(item.path)
              : false;
            const exactMatch = checkPath ? pathname === item.path : false;
            const active = item.popover ? partialMatch : exactMatch;

            return (
              <motion.div
                className="w-full"
                key={item.title}
                variants={itemVariants}
                style={{ pointerEvents: active ? "none" : "" }}
              >
                <ButtonBase
                  component={Link}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  disableRipple
                  sx={{
                    alignItems: "center",
                    borderRadius: 1,
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    px: "16px",
                    py: "8px",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                    ...(active && {
                      color: "primary.main",
                    }),
                  }}
                >
                  {item.title}
                </ButtonBase>
              </motion.div>
            );
          })}
          {navItemLanguage}
        </Stack>
      </motion.ul>
    </motion.nav>
  );
};
TopNavMobile.propTypes = {
  title: PropTypes.any,
  listNav: PropTypes.array,
  pathname: PropTypes.string,
  navItemLanguage: PropTypes.node,
};
export default dynamic(() => Promise.resolve(TopNavMobile), { ssr: false });
