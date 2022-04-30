import React from 'react';

import './Tariff.scss';

function Tariff(props) {
    let cardSelected = "";
    if (props.isSelected) cardSelected = "card-selected";
    return (
        <div className={`card ${cardSelected}`}>
            <div className={`card-text card-header card-${props.color}`}>Безлимитный {props.price}</div>
            <div className={`card-text card-${props.color}`}><p>руб</p><span className='price-large'>{props.price}</span> /мес</div>
            <div>до {props.volume} Мбит/сек</div>
            <div className="card-footer">Объем включенного <br />трафика не ограничен</div>
        </div>
    )
}

export default Tariff;