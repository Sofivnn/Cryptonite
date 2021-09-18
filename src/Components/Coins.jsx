import React from 'react';

const Coins = (props) => {
    const { coins } = props;

    return (

        <tr>
            <td><img src={coins.image} alt="" /></td>
            <td>{coins.name}</td>

            <td>{coins.market_cap_rank}</td>
            <td>{coins.current_price} €</td>
            <td style={{
                color: coins.price_change_percentage_24h < 0 ? "red" : "#0A9538"
            }}>{coins.price_change_percentage_24h} %</td>
            <td>{coins.market_cap.toLocaleString()} €</td>
        </tr>

    );
};

export default Coins;