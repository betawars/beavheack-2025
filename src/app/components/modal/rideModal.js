import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react';
import "./style.css"
import Image from 'next/image';
import route from "../../../../public/route.png"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const RideModal = ({ data, open, closeModal }) => {

    const handleClick = () => {
        sessionStorage.setItem("ride_details", JSON.stringify(data))
        closeModal()
        alert("Ride has been booked")
    }

    const containerStyle = {
        width: '400px',
        height: '400px'
    };
    const center = {
        lat: data?.pickup_lat || 37.7749,   
        lng: data?.pickup_lng || -122.4194
    };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY  
    });

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
                <Image
                    src={route}
                    alt='route'
                    width={400}
                    height={400}
                />
                {/* {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                ) : <p>Loading map...</p>} */}
                <p>Available Seats: {data.available_seats}</p>
            </DialogContent>
            <DialogActions>
                <button className="create-ride" onClick={handleClick}>Book</button>
            </DialogActions>

        </Dialog>
    );
};

export default RideModal;