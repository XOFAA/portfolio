import { Box, Container, Grid, Typography } from "@mui/material"





export const Header = () => {
    return (
        <div>

            <Box sx={{ mt: 20 }}>


                <Container>

                    <Grid container>

                        <Grid item xs={6}>
                            <Box>
                                <Typography sx={{fontSize:'39px',fontWeight:'bolder'}}>Ola, me chamo</Typography>

                                <Typography component={'span'} color={'#70FF00'} sx={{ fontSize: '78px',fontWeight:'bolder' }}>&lt; Giovanne Oliveira &#47;&gt;</Typography>

                                <Typography sx={{fontSize:'50px',fontWeight:'bold'}}>Desenvolvedor Fullstack</Typography>
                                
                                <Box sx={{display:'flex',gap:20}}>

                              
                                <Box sx={{display:'flex',alignItems:'center',width:'20%',gap:1}}>
                                <Typography sx={{fontSize:'86px',fontWeight:'bold',color:'#4F4F4F'}}>1</Typography>
                                <Typography sx={{fontSize:'27px',fontWeight:'regular',color:'#828282'}}>ANO DE EXPERIENCIA </Typography>
                                
                                </Box>

                                
                                <Box sx={{display:'flex',alignItems:'center',width:'20%',gap:1}}>
                                <Typography sx={{fontSize:'86px',fontWeight:'bold',color:'#4F4F4F'}}>5</Typography>
                                <Typography sx={{fontSize:'27px',fontWeight:'regular',color:'#828282'}}>PROJETOS CONCLUIDOS </Typography>
                                
                                </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                           <Box>
                            <img src="images/Avatar.png"/>
                           </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>

    )
}