import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/users/Navbar";
import Spinner from "../../components/users/Spinner";
import { useFetchOnePackageQuery } from "../../store/services/packageService";
import PackageDetail from './PackageDetail'

const Package = () => {

    const { id } = useParams();
    const { data, isFetching } = useFetchOnePackageQuery(id)
    console.log(data);

    const { isPackagePhoto } = useSelector((state) => state.toggleReducer);
    const dispatch = useDispatch();

    return (
        <Section isPackagePhoto={isPackagePhoto}>
            <Navbar />
            {isFetching ? <div style={{ marginTop: "3rem" }}>
                <Spinner />
            </div> : <PackageDetail data={data.package1} />}
        </Section>
    );
};

export default Package;

const Section = styled.div`
`


