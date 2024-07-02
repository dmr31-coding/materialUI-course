import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        secondary: {
            light: '#2196f3',
            main: '#4dabf5'
        },
        mycolor: {
            main: 'teal'
        }
    },
    typography: {
        fontSize: 30
    }
})