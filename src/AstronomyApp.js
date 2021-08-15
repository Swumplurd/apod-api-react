import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

import { CardImageComp } from "./components/CardImageComp/CardImageComp";

const actualDate = `${new Date().getFullYear()}-${parseInt(new Date().getMonth()) + 1 <= 9 ? "0" + (parseInt(new Date().getMonth()) + 1) : parseInt(new Date().getMonth()) + 1}-${new Date().getDate()}`;
const api_key = "jqR7NGVkWWfetBzjdV9yk0Zc0g3qh959R6cxR2V3";

export const AstronomyApp = () => {
    const [date, setDate] = useState(actualDate);
    const { data, loading } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`);

    const handleChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="datePicker" className="form-label">
                                Fecha
                            </label>
                            <input onChange={handleChange} type="date" className="form-control" id="datePicker" aria-describedby="dateHelp" min="1995-06-20" max={actualDate} />
                            <div id="dateHelp" className="form-text">
                                Ingresa una fecha no superior a la actual...
                            </div>
                        </div>
                        {loading ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            <CardImageComp data={data} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
