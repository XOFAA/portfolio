import { Avatar, Box, CardMedia, Container, Grid, Typography } from "@mui/material"





export const Header = () => {
    return (
        <div>

            <Box sx={{ mt: 20 }}>


                <Container>

                    <Grid container spacing={10}>

                        <Grid item xs={12} md={6} lg={6}>
                            <Box sx={{display:'flex',flexDirection:'column'}}>
                                <Typography sx={{fontSize:'39px',fontWeight:'bolder'}}>Ola, me chamo</Typography>

                                <Typography component={'span'} color={'#70FF00'} sx={{ fontSize: {xs:50,sm:75},fontWeight:'bolder' }}>&lt; Giovanne Oliveira &#47;&gt;</Typography>

                                <Typography sx={{fontSize:'45px',fontWeight:'bold'}}>Desenvolvedor Fullstack</Typography>
                                
                                <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'},gap:{xs:1,sm:20}}}>

                              
                                <Box sx={{display:'flex',alignItems:'center',width:'20%',gap:1}}>
                                <Typography sx={{fontSize:'86px',fontWeight:'bold',color:'#4F4F4F'}}>2</Typography>
                                <Typography sx={{fontSize:'27px',fontWeight:'regular',color:'#828282'}}>ANO DE EXPERIENCIA </Typography>
                                
                                </Box>

                                
                                <Box sx={{display:'flex',alignItems:'center',width:'20%',gap:1}}>
                                <Typography sx={{fontSize:'86px',fontWeight:'bold',color:'#4F4F4F'}}>5</Typography>
                                <Typography sx={{fontSize:'27px',fontWeight:'regular',color:'#828282'}}>PROJETOS CONCLUIDOS </Typography>
                                
                                </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                           <Box>
                          
                            <CardMedia sx={{width:'100%',height:{xs:300,sm:700,md:450, lg:600}}} image="images/Avatar.png" title='avatar' />
                           </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>

    )
}