import React, { useEffect } from 'react';
import Navbar from '../../../components/users/Navbar';
import { useFetchTheme2Query } from '../../../store/services/themeService';
import RegularTheme from '../RegularTheme';

const Theme2 = () => {

    const { data, isFetching } = useFetchTheme2Query();
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

export default Theme2;
