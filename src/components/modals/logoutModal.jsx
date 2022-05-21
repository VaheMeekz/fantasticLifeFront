// styles
import "./modals.scss"

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Link} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    transition: "transform 0.6s ease-in-out",
    boxShadow: 24,
    p: 4,
};

export default function LogoutModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const clearData = () => {
    //     try {
    //         sessionStorage.clear()
    //
    //     }
    //     catch (err) {
    //         console.error('err',err)
    //     }
    // }

    return (
        <div>
            <span onClick={handleOpen} className="logout">Log out</span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography style={{color:"white"}} className="font_family" id="modal-modal-title" variant="h6" component="h2">
                        Log out
                    </Typography>
                    <br/>
                    <div className="buttons">
                        <Link to="/login">
                    <Button
                        className="font_family"
                        variant="contained"
                        color="error"
                        onClick={() => sessionStorage.clear()}>
                        Log out
                    </Button>
                        </Link>
                        <a href="#">
                    <Button onClick={handleClose} className="font_family" variant="outlined" color="error">
                        Cancel
                    </Button>
                        </a>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}