import { ThemeProvider } from "@emotion/react";
import { createContext } from "react";
import { DarkTheme } from "../themes/darkTheme/DarkTheme";
import { Box, CssBaseline } from "@mui/material";




const ThemeContext = createContext({})


export const AppThemeProvider =({children})=>{
    return(
        <ThemeContext.Provider value={ThemeContext}>
            <ThemeProvider theme={DarkTheme}>
            <CssBaseline/>
            <Box sx={{width:'100vw',height:'100vh',  background: DarkTheme.palette.background.default}}>
            {children}
            </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

