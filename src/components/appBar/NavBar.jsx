import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
export const NavBar = () => {

    const pages = [{ name: 'Sobre mim', id: 'sobre' }, { name: 'Habilidades', id: 'habilidades' }, { name: 'Projetos', id: 'projetos' },];

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>

            <Container maxWidth="xl">



                <Toolbar >

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>

                        <Box sx={{ display: 'flex' }}>
                            <Typography variant="h5" sx={{ color: '#828282', fontWeight: 'bold' }}>Giovanne</Typography>
                            <Typography variant="h5" sx={{ color: '#F2F2F2' }} >Oliveira</Typography>
                        </Box>



                        <Box sx={{display:'flex',gap:5,fontSize:26}}>

                            {pages.map((page) => (
                                <Link key={page.id} to={'#'+page.id} color="inherit" variant="h6" className="navlink">
                                    {page.name}
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center'}}>
                            <IconButton sx={{color:'#fff',cursor:'pointer'}} target="_blank" href="https://www.linkedin.com/in/francisco-giovanne-cordeiro-de-oliveira-18b635253/">
                            <LinkedInIcon />
                            <Typography>Linkedin</Typography>
                            </IconButton>
                           
                            <IconButton sx={{color:'#fff',cursor:'pointer'}} target="_blank" href="https://www.linkedin.com/in/francisco-giovanne-cordeiro-de-oliveira-18b635253/">
                            <GitHubIcon sx={{ ml: 2 }} />
                            <Typography>GitHub</Typography>
                            </IconButton>

                            <Box sx={{ ml: 2, display: 'flex', border: 2, paddingX: 1.5, paddingY: 0.8, borderImage: 'linear-gradient( #70FF00, #ffff) 1', cursor: 'pointer' }}>
                            <IconButton sx={{color:'#fff',cursor:'pointer'}} target="_blank" href="https://www.linkedin.com/in/francisco-giovanne-cordeiro-de-oliveira-18b635253/">
                                <WhatsAppIcon sx={{ mr: 1 }} />
                                <Typography>Contate-me</Typography>
                                </IconButton>
                            </Box>
                        </Box>




                    </Box>

                    <Box sx={{ display: { xs: 'flex', lg: 'none' }, justifyContent: 'center', width: '100%' }}>
                        
                        <IconButton size="large"
                            onClick={() => setMenuOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"

                            open={menuOpen}
                            onClose={() => setMenuOpen(false)}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}

                        >
                            {pages.map((page) => (
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>


                                    <Link key={page.id} to={`#${page.id}`} color="inherit" variant="h6" className="navlink" onClick={()=>setMenuOpen(false)}>
                                        {page.name}
                                    </Link>
                                </Box>
                            ))}
                        </Menu>
                        
                    </Box>

                </Toolbar>

            </Container>

        </AppBar>

    )

}