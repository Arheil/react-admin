import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Team from './scenes/team';
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendars from "./scenes/calendars";
import FAQ from "./scenes/faq";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from './components/LineChart';
import GeographyChart from "./components/GeographyChart";

function App() {
    const [theme, colorMode] = useMode();

    return (
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <div className="app">
                        <SideBar/>
                        <main className='content'>
                            <TopBar/>
                            <Routes>
                                <Route path='/' element={<Dashboard />}/>
                                <Route path='/team' element={<Team />}/>
                                <Route path='/contacts' element={<Contacts />}/>
                                <Route path='/invoices' element={<Invoices />}/>
                                <Route path='/form' element={<Form />}/>
                                <Route path='/calendar' element={<Calendars />}/>
                                <Route path='/faq' element={<FAQ />}/>
                                <Route path='/bar' element={<BarChart />}/>
                                <Route path='/pie' element={<PieChart />}/>
                                <Route path='/line' element={<LineChart />}/>
                                <Route path='/geography' element={<GeographyChart />}/>
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
    );
}

export default App;
