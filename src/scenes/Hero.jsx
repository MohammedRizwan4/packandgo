import React from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Hero = () => {
    return (
        <Section>
            <div className="buttons">
                <div className="left"><ChevronLeftIcon className='icon'/></div>
                <div className="right"><ChevronRightIcon className='icon'/></div>
            </div>
            <div className="images">
                <video loop autoPlay muted>
                    <source src="../../public/assets/v1.mp4" type="video/mp4"/>
                </video>
            </div>
        </Section>
    );
}

export default Hero;

const Section = styled.section`
    height: 70vh;
    width: 100vw;
    background-color: black;
    position: relative;
    .images{
        height: 100%;
        width: 100vw;
        display: flex;
        video{
            height: 100%;
            width: 100vw;
            object-fit: cover;
            source{
                width: 100vw;
            }
        }
    }
    .buttons{
        position: absolute;
        z-index: 1099;
        padding: 3rem;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            height: 6rem;
            width: 6rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            border: 1px solid rgba(0,0,0,0.4);
            justify-content: center;
            cursor: pointer;
            background-color: rgba(0,0,0,0.4);
            .icon{
                font-size: 5rem;
                color: white;
            }
        }
        .right{
            height: 6rem;
            width: 6rem;
            cursor: pointer;
            border-radius: 50%;
            border: 1px solid rgba(0,0,0,0.4);
            background-color: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
                font-size: 5rem;
                color: white;
            }
        }
    }
`