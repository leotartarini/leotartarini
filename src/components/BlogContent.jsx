import React from 'react';
import styled from 'styled-components';

const BlogContent = (props) => {

    return(
        <Container>
            <h1>{props.title}</h1>
            {props.children}
        </Container>
    )
}

export default BlogContent;

const Container = styled.div`
    text-align: left;
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 20px;
`;