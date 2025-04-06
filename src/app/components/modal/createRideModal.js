"use client"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import validate from '../utilities/validate';

const CreateRideModal = ({ open, closeModal }) => {
 
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNo: "",
        university: "",
        isDriver: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: "" })); 
    };

    const handleSubmit = () => {
        if (validate(formData,setFormErrors)) {

            //send data to api
            alert("Ride has been created")
            closeModal();
        }
    };

    return (
        <Dialog open={open} onClose={closeModal}>
            <DialogTitle>Create Ride</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                />
                <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                />
                <TextField
                    margin="dense"
                    label="First Name"
                    type="text"
                    name="firstName"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!formErrors.firstName}
                    helperText={formErrors.firstName}
                />
                <TextField
                    margin="dense"
                    label="Last Name"
                    type="text"
                    name="lastName"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!formErrors.lastName}
                    helperText={formErrors.lastName}
                />
                <TextField
                    margin="dense"
                    label="Phone Number"
                    type="number"
                    name="phoneNo"
                    fullWidth
                    value={formData.phoneNo}
                    onChange={handleChange}
                    error={!!formErrors.phoneNo}
                    helperText={formErrors.phoneNo}
                />
                <TextField
                    margin="dense"
                    label="University"
                    type="text"
                    name="university"
                    fullWidth
                    value={formData.university}
                    onChange={handleChange}
                    error={!!formErrors.university}
                    helperText={formErrors.university}
                />
                <TextField
                    margin="dense"
                    select
                    label="Are you a driver?"
                    name="isDriver"
                    fullWidth
                    value={formData.isDriver}
                    onChange={handleChange}
                    error={!!formErrors.isDriver}
                    helperText={formErrors.isDriver}
                >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateRideModal;