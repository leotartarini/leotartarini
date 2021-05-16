import React from 'react';
import styled from 'styled-components';

import WhatsApp from '../assets/icons/wpp.svg';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook.svg';
import LinkedIn from '../assets/icons/linkedin.svg';

const BlogContent = (props) => {

    let page = window.location.href;

    return(
        <Container>
            <Tag>{props.tag.toUpperCase()}</Tag>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitulo}</Subtitle>
            <DataBlock>
                <Date>{props.data}</Date>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '180px',
                    padding: '8px 0 0 0'
                }}>
                    <a href={`http://api.whatsapp.com/send?text=${props.title} ${page}`}
                    target='_blank' rel='noopener' style={{
                        width: '12px'
                    }}>
                        <img src={WhatsApp} alt="WhatsApp" />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=${props.title} ${page}`} target='_blank' rel='noopener' style={{
                        width: '12px'
                    }}>
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${page}`}
                    target='_blank' rel='noopener' style={{
                        width: '12px'
                    }}>
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${page}`}
                    target='_blank' rel='noopener' style={{
                        width: '24px'
                    }}>
                        <img src={LinkedIn} alt="Linkedin" />
                    </a>
                </div>
            </DataBlock>
            <div style={{
                width: '120px',
                height: '2px',
                backgroundColor: 'var(--main)',
                margin: '40px 0'
            }}></div>
            {props.children}
            <div style={{
                width: '120px',
                height: '2px',
                backgroundColor: 'var(--main)',
                margin: '80px 0'
            }}></div>
        </Container>
    )
}

export default BlogContent;

const Container = styled.div`
    text-align: left;
    max-width: 800px;
    margin: 35px auto 10px auto;
    padding: 10px 20px;
`;

const Tag = styled.p`
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif;
    color: var(--main);
    margin: 0;
`;

const Title = styled.p`
    font-family: 'Lora', serif;
    font-weight: 500;
    font-size: 45px;
    margin: 0;
    line-height: 1.5em;
    color: var(--black);
`;
const Subtitle = styled.p`
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
    line-height: 1.8em;
    font-weight: 500;
    color: var(--dark-grey);
    margin: 5px 0 0 0;
`;
const Date = styled.p`
    font-family: 'Lora', serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
    height: 10px;

    @media (max-width: 450px) {
        margin-bottom: 40px;
    }
`;

const DataBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    

    @media (max-width: 450px) {
        display: block;
    }
`;

