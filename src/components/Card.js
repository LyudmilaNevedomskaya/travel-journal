import React from "react";

export default function Card(props) {
  return (
    <>
    <div className="card">
      <img className="place-view" src={require(`../images/${props.imageUrl}`)} alt='travel-view'/>
      <section className="card--content">
        <div className="location">
          <img src={require('../images/location-sign.png')} alt='location-sign'/>
          <span className="location--country">{props.location}</span>
          <a className="location--map" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card--content_title">{props.title}</h2>
        <p className="card--content_date">{props.startDate} - {props.endDate}</p>
        <p className="card--content_description">{props.description}</p>
      </section>
    </div>
    <hr />
    </>
  )
}