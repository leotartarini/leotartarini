import React, { useState, useEffect } from 'react';
import marked from 'marked';
import BlogContent from '../components/BlogContent';

let Test = require("../posts/Teste.md");
let Blog1 = ("https://raw.githubusercontent.com/leotartarini/datasets/main/README.md");
let lorem = ('https://raw.githubusercontent.com/leotartarini/posts/main/lorem.md')

let content = ('https://raw.githubusercontent.com/leotartarini/posts/main/lorem/content.md')

const BlogTest = () => {
    const [markdown, setMarkdown] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [date, setDate] = useState('');
    
    useEffect(() => {
        fetch(content)
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                setMarkdown(marked(text));
            })
            .catch((error) => console.error(error));

        fetch('https://raw.githubusercontent.com/leotartarini/posts/main/lorem/data.json')
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                let obj = JSON.parse(text);
                setBlogTitle(obj.título);
                setDate(obj.data);
            })
            .catch((error) => console.error(error));
        

    });

    
    return(
        <BlogContent title={blogTitle}>
            <div dangerouslySetInnerHTML={{__html: markdown}} />
        </BlogContent>
    )
};

export default BlogTest;