import { Box, Container, Typography } from "@mui/material"


export const Habiidades=()=>{

    return(

        <Box sx={{background:'#161616'}}>

        <Container>
            <Box sx={{display:'flex',p:1 }}>
                <Typography sx={{mt:5,fontSize:{xs:30,lg:49},color:'#70FF00',fontWeight:'bold'}}>Habilidades</Typography>
                <Typography sx={{mt:5,fontSize:{xs:30,lg:49}}}>( )</Typography>
            </Box>
            
            <Box sx={{display:'flex',justifyContent:{xs:'center',lg:'normal'},flexWrap:'wrap',gap:5,paddingY:10}}>

            <img style={{height:"128px"}} src="images/habilidades/Javascript.png"/>
     

        
            <img style={{height:"128px"}}src="images/habilidades/React.png"/>
          
            <img style={{height:"128px"}}src="images/habilidades/Node.png"/>
        
      
        
            <img style={{height:"128px"}}src="images/habilidades/Sequelize.png"/>
          
         
            <img style={{height:"128px"}}src="images/habilidades/Html.png"/>
            <img style={{height:"128px"}}src="images/habilidades/Css.png"/>
            <img style={{height:"128px"}}src="images/habilidades/Mysql.png"/>
          
            <img style={{height:"128px"}}src="images/habilidades/Flutter.png"/>
            
        
            <img style={{height:"128px"}}src="images/habilidades/Git.png"/>
            <img style={{height:"128px"}}src="images/habilidades/Linux.png"/>
            <img style={{height:"128px"}}src="images/habilidades/Docker.png"/>
            <img style={{height:"128px"}}src="images/habilidades/Bootstrap.png"/>
            <img style={{height:"128px"}} src="images/habilidades/mui.png"/>
          </Box>
        </Container>
        </Box>
    )
}