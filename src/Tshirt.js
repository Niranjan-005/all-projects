import React from 'react'
import shoe from './asset/shoe1.jpeg'
import tb from './asset/teesblack.jpeg'
import tw from './asset/teeswhite.jpeg'
import tbr from './asset/teesbrown.jpeg'


const Tshirt = ({ tshirtObj }) => {


    return (
        <div style={{ display: "flex" }}>
            {tshirtObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={item.image} className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                            <strike className="strikeShoe">${item.strikeprice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Tshirt