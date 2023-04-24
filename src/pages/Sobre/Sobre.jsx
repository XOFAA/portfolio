import { Box, Container, Grid, Link, Typography } from "@mui/material"


export const Sobre = () => {
    return (



        <Container sx={{mt:20,pb:30}}>

            <Grid container spacing={5}>

                <Grid item xs={6}>
                    <Box sx={{display:'flex'}}>

                    
                    <Typography sx={{ fontWeight: 'bold', fontSize: 49 ,color:'#70FF00'}}>Sobre mim</Typography>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 49 ,color:'#E0E0E0'}}>( )</Typography>
                    </Box>
                    <Typography> acilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc. </Typography>
                </Grid>

                <Grid item xs={6}>

                    <Box sx={{ display: 'flex', boxShadow: 5, borderRadius: 1.5, bgcolor: '#4F4F4F' }}>

                        <Box sx={{ padding: 3 ,width:'100%'}}>

                            <Typography sx={{ fontWeight: 'bold', fontSize: 33, fontFamily: 'Courier Prime' }}>Desenvolvedor Fullstack</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Link sx={{ mt: 2, fontWeight: 'regular', fontSize: 25, fontFamily: 'Courier Prime', color: '#70FF00' }}>Projetos</Link>
                                <img height={50} src="images/Tag.png" />
                            </Box>


                        </Box>
                        </Box>

                    <Box sx={{ display: 'flex',mt:2, boxShadow: 5, borderRadius: 1.5, bgcolor: '#4F4F4F' }}>

                  

                        <Box sx={{ padding: 3,width:'100%'}}>

                            <Typography sx={{ fontWeight: 'bold', fontSize: 33, fontFamily: 'Courier Prime' }}>Freelancer</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Link sx={{ mt: 2, fontWeight: 'regular', fontSize: 25, fontFamily: 'Courier Prime', color: '#70FF00' }}>Contrate-me </Link>
                                <img height={50} src="images/Chaves.png" />
                            </Box>


                        </Box>

                    </Box>
                   
                   
                </Grid>

            </Grid>

        </Container>

    )
}