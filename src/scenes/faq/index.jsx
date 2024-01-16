import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Important Question
          </Typography>


        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur  elit. 
            malesuada lacus ex, sit amet blandit eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>

          <Typography color={colors.greenAccent[500]} variant="h5">
           Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            malesuada lacus ex, sit amet blandit leo eget.
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
       <AccordionSummary expandIcon={<ExpandMoreIcon />}>

          <Typography color={colors.greenAccent[500]} variant="h5">
           Favorite Question

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            malesuada lacus ex, sit amet blandit leo eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>

          <Typography color={colors.greenAccent[500]} variant="h5">
           Random Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            malesuada lacus ex, sit amet blandit leo eget.
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>


        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Final Question
          </Typography>


        </AccordionSummary>
        <AccordionDetails>
          <Typography>

           Lorem ipsum dolor , consectetur adipiscing elit. Suspendisse
           malesuada lacus ex, sit amet leo lobortis eget.
      </Typography>
     </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;