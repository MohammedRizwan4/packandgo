import React from 'react';
import { useSelector } from 'react-redux';

const MyBookings = () => {
    const { travellers } = useSelector(state => state.globalReducer);
    console.log(travellers);
    return (
        <div>
            MyBookings
        </div>
    );
}

export default MyBookings;
