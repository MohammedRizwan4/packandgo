import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/authReducer';

const AdminNav = () => {

    const { adminToken } = useSelector(state => state.authReducer)
    const dispatch = useDispatch();

    const logout1 = () => {
        dispatch(logout("admin-token"))
    }

    return (
        <Section>
            <h1>PACK&GO</h1>
            {adminToken && <button onClick={() => logout1()}>Logout</button>}
        </Section>
    );
}

export default AdminNav;

const Section = styled.div`
    height: 10vh;
    width: 100%;
    background-color: var(--bgDarkBlue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--r10);
    h1{
        font-size: var(--r3);
        color: var(--bgYellow);
    }
    button{
        padding: var(--r1) var(--r3);
        font-size: var(--r1-75);
        background-color: var(--bgYellow);
        border-radius: var(--r-5);
        cursor: pointer;
        color: var(--bgWhite);
    }
`

