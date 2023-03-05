import {Box, Typography, useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {mockDataTeam} from "../../data/mockData";
import {AdminPanelSettingsOutlined} from "@mui/icons-material";
import {LockOpenOutlined} from "@mui/icons-material";
import {SecurityOutlined} from "@mui/icons-material";
import Header from "../../components/Header";

function Team(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: 'id', headerName: 'ID'},
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell'
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,

        },
        {
            field: 'access',
            headerName: 'Access Level',
            flex: 1,
            renderCell: ({row: {access}}) => {
                return (
                    <Box
                        width='60%'
                        m='0 auto'
                        display='flex'
                        justifyContent='center'
                        backgroundColor={
                            access === 'admin'
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]
                        }
                        borderRadius='4px'
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlined />}
                        {access === 'manager' && <SecurityOutlined />}
                        {access === 'user' && <LockOpenOutlined />}

                        <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },

    ]

    return (
        <Box m='20px'>
            <Header title='TEAM' subtitle='Managing the Team Members'/>
            <Box
                m='40px 0 0 0'
                height='75vh'
            >
                <DataGrid columns={columns} rows={mockDataTeam}/>
            </Box>
        </Box>
    );
}

export default Team;