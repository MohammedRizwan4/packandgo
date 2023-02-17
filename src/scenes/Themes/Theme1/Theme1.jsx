import React, { useEffect } from 'react';
import Navbar from '../../../components/users/Navbar';
import Spinner from '../../../components/users/Spinner';
import { useFetchAllThemesQuery, useFetchTheme1Query } from '../../../store/services/themeService';
import RegularTheme from '../RegularTheme';

const Theme1 = () => {

    const { data, isFetching } = useFetchTheme1Query();
    console.log(data);

    useEffect(() => {

    }, []);

    return (
        <div>
            <Navbar />
            {data?.theme ? <RegularTheme data={data} /> : <div style={{ marginTop: "3rem" }}>
                <Spinner />
            </div>}
        </div>
    );
}

export default Theme1;
