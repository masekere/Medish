import { styled, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types'
import { useState } from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AccordionContainer = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))({});

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    flexDirection: 'row-reverse',
    fontSize: { lg: 19 },
    color: '#273a69',
    transition: "0.3s ease-in-out",
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ':hover': {
        color: '#13c5dd'
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export default function Accordion({ items, sx, py }) {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (index) => (event, newExpanded) => {
        setExpanded(newExpanded ? index : false);
    };

    const ExpandIcon = ({ index }) => expanded === index ?
        <RemoveIcon /> : <AddIcon />


    return (
        <Box sx={sx}>
            {items.map((item, index) => (
                <AccordionContainer sx={{py: py}} key={index} expanded={expanded === index} onChange={handleChange(index)}>
                    <AccordionSummary expandIcon={<ExpandIcon index={index} />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                        {item.summary}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.details}</Typography>
                    </AccordionDetails>
                </AccordionContainer>
            ))}
        </Box>
    )
}

Accordion.propTypes = {
    items: PropTypes.array.isRequired
}