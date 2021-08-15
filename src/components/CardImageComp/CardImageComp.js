import React from "react";

export const CardImageComp = ({ data }) => {
    return (
        <div className="card bg-dark text-white">
            <img src={data.url} className="card-img" alt={data.title} />
            <div className="card-img-overlay">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.date}</p>
            </div>
        </div>
    );
};
