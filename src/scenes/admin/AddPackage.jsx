import React from 'react';
import styled from 'styled-components';
import AdminAddPackage from '../../components/admin/AdminAddPackage';
import AdminNav from '../../components/admin/AdminNav';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AddPackage = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminAddPackage />
            </div>
        </Section>
    );
}

export default AddPackage;

const Section = styled.section`
    .main{
        display: flex;
    }
`