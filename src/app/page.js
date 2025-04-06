"use client"
import "./style.css"
import CardGrid from "./cardgrid";
import { useState } from "react";
import CreateRideModal from "./components/modal/createRideModal";
export default function Home() {


  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }


  const handleOnClick = (event) => {
    setModalOpen(true)
  }

  const data = {
    "cardGrid": [
      { "id": 1, "content": "Ride with A", "ride_details": "From Corvallis to Portland" },
      { "id": 2, "content": "Ride with B", "ride_details": "From Corvallis to Portland" },
      { "id": 3, "content": "Ride with C", "ride_details": "From Corvallis to Portland" },
      { "id": 4, "content": "Ride with D", "ride_details": "From Corvallis to Portland" },
      { "id": 5, "content": "Ride with E", "ride_details": "From Corvallis to Portland" },
      { "id": 6, "content": "Ride with F", "ride_details": "From Corvallis to Portland" }
    ]
  }
  return (
    <div className="main">
      <div className="create-button-div">
        <button className="create-ride" onClick={handleOnClick}>Create New Ride</button>
      </div>
      <div className="available-rides">
        <h1>Available rides</h1>
        <CardGrid data={data} />
      </div>
      {modalOpen ? <CreateRideModal  open={modalOpen}  closeModal={closeModal}/> : ""}

    </div>
  );
}
