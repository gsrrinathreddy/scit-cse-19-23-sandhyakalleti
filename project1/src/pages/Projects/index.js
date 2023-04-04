import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Mini Project </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Internet of Things:Multi-Dimensional Scaling Assisted Clone Detecton(MSDCLONE) 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Artificial Intelligence </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Insurance Decisioning System 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Power BI </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Product Sales Data Analysis
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}