import { useState } from "react";
import ChevronDownIcon from "@untitled-ui/icons-react/build/esm/ChevronDown";
import ChevronRightIcon from "@untitled-ui/icons-react/build/esm/ChevronRight";
import {
  Box,
  Collapse,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "utils/motion";
import useTranslation from "next-translate/useTranslation";
import { listFaq } from "assets/database/list-faq";

const Faq = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: "pointer" }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1" component={"h5"}>
          {question}
        </Typography>
        <SvgIcon>
          {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </SvgIcon>
      </Stack>
      <Collapse in={isExpanded}>
        <Typography color="text.secondary" variant="body2">
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

export const HomeFaqs = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Box sx={{ py: "120px" }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={staggerContainer}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <Stack spacing={2}>
                <motion.div variants={fadeIn("down", "tween", 0.25)}>
                  <Typography variant="h3">{t("faq_title")}</Typography>
                </motion.div>
                <motion.div variants={fadeIn("up", "tween", 0.25)}>
                  <Typography
                    color="text.secondary"
                    variant="subtitle2"
                    component={"h4"}
                  >
                    {t("faq_content")}
                  </Typography>
                </motion.div>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <motion.div variants={fadeIn("left", "tween", 0.25)}>
                <Stack spacing={4}>
                  {listFaq?.[lang].map((faq, index) => (
                    <Faq key={index} {...faq} />
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};
