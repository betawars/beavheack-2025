"use client"
import "./style.css"
import CardGrid from "./cardgrid";
import { useEffect, useState } from "react";
import CreateRideModal from "./components/modal/createRideModal";
import SignIn from "./signin/page";
export default function Home() {

  const [session, setSession] = useState(false)

  useEffect(() => {
    const storedSession = sessionStorage.getItem("isActive");
    if (storedSession) {
      setSession(true)
    }
  }, []);


  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }


  const handleOnClick = (event) => {
    setModalOpen(true)
  }

  const data = {
    "cardGrid": [
      { "id": 1, "content": "Ride with A", "ride_details": "From Corvallis to Portland", "available_seats": 2 },
      { "id": 2, "content": "Ride with B", "ride_details": "From Corvallis to Portland", "available_seats": 2 },
      { "id": 3, "content": "Ride with C", "ride_details": "From Corvallis to Portland", "available_seats": 2 },
      { "id": 4, "content": "Ride with D", "ride_details": "From Corvallis to Portland", "available_seats": 2 },
      { "id": 5, "content": "Ride with E", "ride_details": "From Corvallis to Portland", "available_seats": 2 },
      { "id": 6, "content": "Ride with F", "ride_details": "From Corvallis to Portland", "available_seats": 2 }
    ]
  }
  return (
    <div className="main">

      {session ?
        <div>
          <div className="create-button-div">
            <button className="create-ride" onClick={handleOnClick}>Create New Ride</button>
          </div>
          <div className="available-rides">
            <h1>Available rides</h1>
            <CardGrid data={data} />
          </div>
          {modalOpen ? <CreateRideModal open={modalOpen} closeModal={closeModal} /> : ""}
        </div> :

        <SignIn/>
      }

    </div>
  );
}
