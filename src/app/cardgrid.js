"use client"
import { useEffect, useState } from "react"
import "./style.css"
import RideModal from "./components/modal/rideModal"

export default function CardGrid(props){
    const {data} = props

    const [modalOpen,setModalOpen] = useState(false)
    const [currentData, setCurrentData] = useState("")

    const closeModal = () => {
        setModalOpen(false)
    }
    

    const handleOnClick = (event) =>{
        setCurrentData(event)
        setModalOpen(true)
    }

   
    return (
        <div className="card-grid">
            {data.cardGrid.map((card) => (
                <div className="card" key={card.id} >
                    <div onClick={e=>handleOnClick(card)}>
                        {card.content}
                    </div>
                    
                </div>
            ))}
            {modalOpen?<RideModal open={modalOpen} data={currentData} closeModal={closeModal}></RideModal>:""}
        </div>
        
    )
}