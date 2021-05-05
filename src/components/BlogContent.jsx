import React from 'react';
import styled from 'styled-components';

const BlogContent = (props) => {

    return(
        <Container>
            <Tag>{props.tag.toUpperCase()}</Tag>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitulo}</Subtitle>
            <DataBlock>
                <Date>{props.data}</Date>
                <span>social</span>
            </DataBlock>
            <hr style={{
                opacity: '65%',
                margin: '25px 0 40px 0'
            }} />
            {props.children}
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
    color: #22458f;
    margin: 0;
`;

const Title = styled.p`
    font-family: 'Lora', serif;
    font-weight: 500;
    font-size: 45px;
    margin: 0;
    line-height: 1.5em;
    color: black;
`;
const Subtitle = styled.p`
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
    line-height: 1.8em;
    font-weight: 500;
    color: #979797;
    margin: 5px 0 0 0;
`;
const Date = styled.p`
    font-family: 'Lora', serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
`;

const DataBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 450px) {
        display: block;
    }
`;

