import { Box } from '@mui/material';
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

function PieChart() {
    return (
        <Box m='20px'>
            <Header title='Pie Chart' subtitle='Simple Pie Chart' />
            <Box height='50vh'>
                <PieChart />
            </Box>
        </Box>
    );
}

export default PieChart;