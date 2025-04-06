import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react';

const RideModal = ({ data, open, closeModal }) => {
    
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
            </DialogContent>
        </Dialog>
    );
};

export default RideModal;