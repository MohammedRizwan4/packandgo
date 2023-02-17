import React, { useEffect } from 'react';
import Navbar from '../../../components/users/Navbar';
import { useFetchTheme3Query } from '../../../store/services/themeService';
import RegularTheme from '../RegularTheme';

const Theme3 = () => {

    const { data, isFetching } = useFetchTheme3Query();
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

export default Theme3;
