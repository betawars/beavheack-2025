import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react';
import "./style.css"

const RideModal = ({ data, open, closeModal }) => {

    const handleClick = () => {
        closeModal()
    }
    
    return (
        <Dialog
            open={open}
            onClose={closeModal}
        >
            <DialogTitle>
                {data.content}
            </DialogTitle>
            <DialogContent>
                {data.ride_details}
                <p>Available Seats: {data.available_seats}</p>
                <button className="create-ride" onClick={handleClick}>Book</button>
            </DialogContent>

        </Dialog>
    );
};

export default RideModal;