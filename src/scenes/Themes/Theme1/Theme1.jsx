import React, { useEffect } from 'react';
import Navbar from '../../../components/users/Navbar';
import Spinner from '../../../components/users/Spinner';
import { useFetchTheme1PackageQuery } from '../../../store/services/packageService';
import { useFetchAllThemesQuery, useFetchTheme1Query } from '../../../store/services/themeService';
import RegularTheme from '../RegularTheme';

const Theme1 = () => {

    const { data, isFetching } = useFetchTheme1Query();

    const { data: data1, isFetching: isFetching1 } = useFetchTheme1PackageQuery(data?.theme && data?.theme?._id)
    console.log(data1);

    useEffect(() => {

    }, []);

    return (
        <div>
            <Navbar />
            {isFetching || isFetching1 ? <div style={{ marginTop: "3rem" }}>
                <Spinner />
            </div> : <RegularTheme data={data} packages={data1?.packages}/>}
        </div>
    );
}

export default Theme1;
