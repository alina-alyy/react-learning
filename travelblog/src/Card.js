
import './index.css';
import React from 'react';
export default function Card(props){
    return(
        <>
        <div className="Main">
        <div className="Card">
          <img src={`${props.item.img}`}></img>
          <div className="Content">
            <div className="title">
              <img src="map.jpg"></img>
              <p>{props.item.country}</p>
              <p>View with google images</p>
            </div>
            <h1>{props.item.title}</h1>
            <p>{props.item.date}</p>
            <p>
             {props.item.description}
            </p>
          </div>
        </div>
      </div>
        </>
    )
}