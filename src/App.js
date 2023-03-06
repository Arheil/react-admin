import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Team from './scenes/team';
import Contacts from "./scenes/contacts";

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
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/team' element={<Team />}/>
                                <Route path='/contacts' element={<Contacts/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
    );
}

export default App;
