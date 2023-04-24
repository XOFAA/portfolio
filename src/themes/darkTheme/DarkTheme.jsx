import { createTheme } from "@mui/material";



export const DarkTheme =createTheme({
    typography:{
        fontFamily: [
            'Roboto',
            'Courier Prime',
            'Arial',
            'sans-serif'
          ].join(','),
    },
    palette:{
        primary:{
        main:"#fff",
        dark:"#fff",
        light:"#fff",
        contrastText:"#fff"
        },
        text:{
            primary:"#fff"
        },
       
    
     
        background:{
            paper:"#0000",
            default: "linear-gradient(80deg, #000000, #272727, #727272)"
        }
    }
})