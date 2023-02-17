import React, { useEffect } from 'react';
import Navbar from '../../../components/users/Navbar';
import { useFetchTheme4Query } from '../../../store/services/themeService';
import RegularTheme from '../RegularTheme';

const Theme4 = () => {

    const { data, isFetching } = useFetchTheme4Query();
    console.log(data);

    useEffect(() => {

    }, []);

    return (
        <div>
            <Navbar />
            {data && <RegularTheme data={data} />}
        </div>
    );
}

export default Theme4;
