import React from 'react';
import styled from 'styled-components';

const Landing = () => {
    return(
        <div>
            <Billboard>
                <HeadingContainer>
                    <Heading>Leonardo Tartarini</Heading>
                    <LinksContainer>
                        <Link color={'#22458f'} href='mailto:leonardo@sigma.cash'>Email</Link>
                        <Link color={'#2867B2'} href='https://linkedin.com/in/leotartarini' target='_blank' rel='noopener'>LinkedIn</Link>
                        <Link color={'#1DA1F2'} href='https://twitter.com/eutartarini' target='_blank' rel='noopener'>Twitter</Link>
                        <Link color={'#24292d'} href='https://github.com/leotartarini' target='_blank' rel='noopener'>Github</Link>
                        <Link color={'#26cb17'} href='https://sigma.cash' target='_blank' rel='noopener'>Sigma</Link>
                    </LinksContainer>
                </HeadingContainer>
            </Billboard>
        </div>
    )
};

const Billboard = styled.div`
    height: 100vh;
    /* background-color: #FFF1E5; */
    background-color: #F5F8FA;
    display: flex;
    align-items: center;
`;

const HeadingContainer = styled.div`
    margin: 0 10vw;
    text-align: left;
`;

const Heading = styled.h1`
    font-size: 70px;
    font-weight: normal;
    margin: 0 0 15px 0;
    font-family: 'Lora', serif;
    /* color: #8F223A; */
    color: #22458f;
    
    @media only screen and (max-width: 900px) {
    font-size: 55px;
    }
    @media only screen and (max-width: 540px) {
    font-size: 40px;
    }
`;

const LinksContainer = styled.div`
    font-size: 20px;
    font-family: 'Noto Sans JP', sans-serif;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;

    @media only screen and (max-width: 540px) {
    font-size: 20px;
    margin-top: 20px;
    }
`;

const Link = styled.a`
    text-decoration: underline ${p => p.color || '#26cb17'};
    color: black;
    margin: 5px 20px 15px 0;
    
`;


export default Landing;