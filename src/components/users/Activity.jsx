import React, { useState } from 'react';
import styled from 'styled-components';
import './Activity.css';

const Activity = () => {

    const Activity1 = () => {
        return (<div className='activity1'>
            <h1>Paraglyding</h1>
            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatem aliquid ut nulla distinctio, officiis, temporibus quibusdam similique voluptatum, modi architecto laboriosam explicabo quasi fugit blanditiis voluptates placeat dolore? Aliquam, natus? Doloribus neque repellendus modi porro sed sequi nam velit, maxime aliquid amet necessitatibus inventore fugiat odit voluptatum dicta cumque! Accusantium esse nesciunt cupiditate suscipit voluptatibus ducimus eos? Eligendi repellat ad repellendus autem fugiat quaerat deserunt nobis consequatur numquam necessitatibus!</p>
        </div>)
    }

    const Activity2 = () => {
        return (<div>
            Activity2
        </div>)
    }

    const Activity3 = () => {
        return (<div>
            Activity3
        </div>)
    }

    const Activity4 = () => {
        return (<div>
            Activity4
        </div>)
    }

    const [menu, setMenu] = useState(1);
    return (
        <Section menu={menu}>
            <div className="left">
                <h1>Activities</h1>
                <ul>
                    <li className='l1' onClick={() => setMenu(1)}>Activity 1</li>
                    <li className='l2' onClick={() => setMenu(2)}>Activity 2</li>
                    <li className='l3' onClick={() => setMenu(3)}>Activity 3</li>
                    <li className='l4' onClick={() => setMenu(4)}>Activity 4</li>
                </ul>
            </div>
            <div className="right">
                {
                    menu === 1 && <Activity1 />
                }
                {
                    menu === 2 && <Activity2 />
                }
                {
                    menu === 3 && <Activity3 />
                }
                {
                    menu === 4 && <Activity4 />
                }
            </div>
        </Section>
    );
}

export default Activity;

const Section = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    .left{
        flex: 1.5;
        margin-top: 2rem;
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
                background-color: ${props => props.menu === 1 ? "gray" : "none"};
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
                width: 80%;
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