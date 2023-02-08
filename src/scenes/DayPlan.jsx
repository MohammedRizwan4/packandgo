import React, { useState } from 'react';
import styled from 'styled-components';

const DayPlan = () => {

    const DayPLan1 = () => {
        return (<div>
            DayPLan1
        </div>)
    }

    const DayPLan2 = () => {
        return (<div>
            DayPLan2
        </div>)
    }

    const DayPLan3 = () => {
        return (<div>
            DayPLan3
        </div>)
    }

    const DayPLan4 = () => {
        return (<div>
            DayPLan4
        </div>)
    }

    const [menu, setMenu] = useState(1);
    return (
        <Section menu={menu}>
            <div className="left">
                <h1>Day Plan</h1>
                <ul>
                    <li className='l1' onClick={() => setMenu(1)}>Day 1</li>
                    <li className='l2' onClick={() => setMenu(2)}>Day 2</li>
                    <li className='l3' onClick={() => setMenu(3)}>Day 3</li>
                    <li className='l4' onClick={() => setMenu(4)}>Day 4</li>
                </ul>
            </div>
            <div className="right">
                {
                    menu === 1 && <DayPLan1 />
                }
                {
                    menu === 2 && <DayPLan2 />
                }
                {
                    menu === 3 && <DayPLan3 />
                }
                {
                    menu === 4 && <DayPLan4 />
                }
            </div>
        </Section>
    );
}

export default DayPlan;

const Section = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    .left{
        margin-top: 2rem;
        flex: 1;
        border-right: 2px solid black;
        h1{
            font-size: 2.5rem;
            padding: 1rem 3rem;
        }
        ul{
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            padding: 1rem 0rem;
            .l1{
                background-color: ${props => props.menu === 1 ? "grey" : "none"};
            }
            .l2{
                background-color: ${props => props.menu === 2 ? "grey" : "none"};
            }
            .l3{
                background-color: ${props => props.menu === 3 ? "grey" : "none"};
            }
            .l4{
                background-color: ${props => props.menu === 4 ? "grey" : "none"};
            }
            li{
                list-style-type: none;
                font-size: 2rem;
                width: 70%;
                padding: 1rem 3rem;
                color: black;
                cursor: pointer;
                border-top-right-radius: 2rem;
                border-bottom-right-radius: 2rem;
                margin-bottom: 2rem;
            }
        }
    }
    .right{
        flex:4;
        margin-top: 3rem;
        margin-left: 3rem;
    }
`