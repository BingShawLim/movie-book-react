import React from 'react'

export default function MovieCard(props) {
    return (
        <div className="card" key={props.key}>
            <img className="card--image"
                src={props.image}
                alt={props.title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{props.title}</h3>
            <p><small>RELEASE DATE: {props.date}</small></p>
            <p><small>RATING: {props.rate}</small></p>
            <p className="card--desc">{props.overview}</p>
            </div>
        </div>
    )
}

/* 
<MovieCard
key={}
image={}
date={}
title={}
rate={}
overview={}
/>
*/