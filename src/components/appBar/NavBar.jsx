import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const NavBar = () => {

    const pages = ['Sobre mim', 'Habilidades', 'Projetos']


    return (

        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>

            <Container maxWidth="xl">



                <Toolbar >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Typography variant="h5" sx={{ color: '#828282', fontWeight: 'bold' }}>Giovanne</Typography>
                            <Typography variant="h5" sx={{ color: '#F2F2F2' }} >Oliveira</Typography>
                        </Box>


                        <Box >

                            {pages.map((page) => (
                                <Button variant="text">{page}</Button>
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center',cursor:'pointer'}}>
                            <LinkedInIcon />
                            <Typography>Linkedin</Typography>
                            <GitHubIcon sx={{ ml: 2 }} />
                            <Typography>GitHub</Typography>

                            <Box sx={{ml: 2, display: 'flex', border: 2, paddingX: 1.5, paddingY: 0.8,borderImage: 'linear-gradient( #70FF00, #ffff) 1',cursor:'pointer'}}>
                                <WhatsAppIcon sx={{mr:1}} />
                                <Typography>Contate-me</Typography>
                            </Box>
                        </Box>




                    </Box>

                </Toolbar>

            </Container>

        </AppBar>

    )

}