import { Box, useTheme, Typography } from '@mui/material';
import Header from "../../components/Header";
import { AccordionSummary } from "@mui/material";
import { Accordion } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import  ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='h5' color={colors.greenAccent[500]}>
                        An Important Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam dolorum odio optio praesentium quisquam rerum. Aspernatur deleniti nam nihil sapiente. Ab accusantium consequatur laborum non perferendis perspiciatis vel veniam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='h5' color={colors.greenAccent[500]}>
                        Another Important Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam dolorum odio optio praesentium quisquam rerum. Aspernatur deleniti nam nihil sapiente. Ab accusantium consequatur laborum non perferendis perspiciatis vel veniam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='h5' color={colors.greenAccent[500]}>
                        Your Favorite Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam dolorum odio optio praesentium quisquam rerum. Aspernatur deleniti nam nihil sapiente. Ab accusantium consequatur laborum non perferendis perspiciatis vel veniam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='h5' color={colors.greenAccent[500]}>
                        Some Random Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam dolorum odio optio praesentium quisquam rerum. Aspernatur deleniti nam nihil sapiente. Ab accusantium consequatur laborum non perferendis perspiciatis vel veniam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='h5' color={colors.greenAccent[500]}>
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam dolorum odio optio praesentium quisquam rerum. Aspernatur deleniti nam nihil sapiente. Ab accusantium consequatur laborum non perferendis perspiciatis vel veniam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;