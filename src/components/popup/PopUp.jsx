import { Box, Icon, IconButton, Modal, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export const PopUp = ({openModal,closeModal}) => {

return (


<Modal
    open={openModal}
    onClose={closeModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={{
        position: 'absolute',
        bgcolor: '#000',
        p: 5,
        boxShadow: 2,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }}>
        <IconButton onClick={(closeModal)} sx={{position:'absolute',right:0,top:0}}>
        <CloseIcon sx={{color:'#fff',fontSize:'40px'}}/>
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Ola, que bom te ver por aqui!
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            O meu portfolio está em desenvolvimento neste exato momento.
        </Typography>

        <Typography sx={{ mt: 2 }}>
            Feche esta janela e dê uma olhadinha de como está ficando o meu portfolio.
        </Typography>

    </Box>

</Modal>



)
}