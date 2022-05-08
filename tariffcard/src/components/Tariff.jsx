import React, { useState } from 'react';

import './Tariff.scss';

function Tariff(props) {
    const [selected, setSelected] = useState(false);

    const handleChange = () => {
        setSelected(!selected);
    };

    return (
        <div className={`card ${selected ? "card-selected" : ""}`} onClick={handleChange}>
            <div className={`card-text card-header card-${props.color}`}>Безлимитный {props.price}</div>
            <div className={`card-text card-${props.color}`}><p>руб</p><span className='price-large'>{props.price}</span> /мес</div>
            <div>до {props.volume} Мбит/сек</div>
            <div className="card-footer">Объем включенного <br />трафика не ограничен</div>
        </div>
    )
}

export default Tariff;