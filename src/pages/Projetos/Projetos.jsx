import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Box, Container, Typography } from '@mui/material';


export const Projetos = () => {


    return (

        <Box>
            <Container>
                <Box sx={{ display: 'flex', p: 2 }}>
                    <Typography sx={{ mt: 5, fontSize: 49, color: '#70FF00', fontWeight: 'bold' }}>Projetos</Typography>
                    <Typography sx={{ mt: 5, fontSize: 49 }}>( )</Typography>
                </Box>
            </Container>
            <Swiper
                // install Swiper modules
                modules={[Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={50}
                breakpoints={{
                    600: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }



                }}


                navigation
            >
                <SwiperSlide>
                    <Box sx={{
                        borderRadius: 2,
                        height: 350,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "end",
                        border: 2,
                       
                        backgroundImage: 'url(/images/projeto1.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'border-color 1.5s ease',
                        '&:hover': {
                            borderColor: 'green',
                        },
                    }}>
                        <Box sx={{ display: 'flex', padding: 2, height: 70, bgcolor: 'rgba(76,76,76,0.4)' }}>
                            <Typography sx={{ fontSize: '35px', fontWeight: 'bold' }}>Projeto 1</Typography>
                        </Box>
                    </Box>

                </SwiperSlide>

                <SwiperSlide>
                    <Box sx={{ borderRadius: 2, height: 350, display: 'flex', flexDirection: 'column', justifyContent: "end", border: 2, backgroundImage: 'url(/images/projeto1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Box sx={{ display: 'flex', padding: 2, height: 70, bgcolor: 'rgba(76,76,76,0.4)' }}>
                            <Typography sx={{ fontSize: '35px', fontWeight: 'bold' }}>Projeto 2</Typography>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box sx={{ borderRadius: 2, height: 350, display: 'flex', flexDirection: 'column', justifyContent: "end", border: 2, backgroundImage: 'url(/images/projeto1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Box sx={{ display: 'flex', padding: 2, height: 70, bgcolor: 'rgba(76,76,76,0.4)' }}>
                            <Typography sx={{ fontSize: '35px', fontWeight: 'bold' }}>Projeto 3</Typography>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box sx={{ borderRadius: 2, height: 350, display: 'flex', flexDirection: 'column', justifyContent: "end", border: 2, backgroundImage: 'url(/images/projeto1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Box sx={{ display: 'flex', padding: 2, height: 70, bgcolor: 'rgba(76,76,76,0.4)' }}>
                            <Typography sx={{ fontSize: '35px', fontWeight: 'bold' }}>Projeto 4</Typography>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box sx={{ borderRadius: 2, height: 350, display: 'flex', flexDirection: 'column', justifyContent: "end", border: 2, minWidth: 250, backgroundImage: 'url(/images/projeto1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Box sx={{ display: 'flex', padding: 2, height: 70, bgcolor: 'rgba(76,76,76,0.4)' }}>
                            <Typography sx={{ fontSize: '35px', fontWeight: 'bold' }}>Projeto 5</Typography>
                        </Box>
                    </Box>
                </SwiperSlide>











            </Swiper>
        </Box>
    )
}