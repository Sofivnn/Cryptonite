import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coins from './Coins';

// import axios from 'axios';


const DataCoins = () => {
    const [state, setstate] = useState([]);



    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((res) => setstate(res.data));
    }, [])

  

    return (
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Id</th>
                        <th>Market Rank</th>
                        <th>Current Price</th>
                        <th>24h Percentage %</th>
                        <th>Market Cap </th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((coins) => (
                      <Coins coins={coins} key={coins.id}/>
                    ))}
                </tbody>
            </table>

    );
};

export default DataCoins;