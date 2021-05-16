import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import marked from 'marked';
import BlogContent from '../components/BlogContent';

const BlogTest = () => {
    const [markdown, setMarkdown] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogSubtitle, setBlogSubtitle] = useState('');
    const [date, setDate] = useState('');
    const [tag, setTag] = useState('');

    const [error, setErro] = useState(false);

    let { blogid } = useParams();

    let content = (`https://raw.githubusercontent.com/leotartarini/posts/main/${blogid}/content.md`)
    let data = (`https://raw.githubusercontent.com/leotartarini/posts/main/${blogid}/data.json`)
    
    useEffect(() => {
        fetch(content)
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                setMarkdown(marked(text));
            })
            .catch((error) => setErro(true));

        fetch(data)
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                let obj = JSON.parse(text);
                setBlogTitle(obj.titulo);
                setBlogSubtitle(obj.subtitulo);
                setDate(obj.data);
                setTag(obj.assunto);
            })
            .catch((error) => setErro(true));
    });

    
    return(
        <div>
            {error === false ?
            (<>
                <BlogContent title={blogTitle} subtitulo={blogSubtitle} data={date} tag={tag}>
                    <div dangerouslySetInnerHTML={{__html: markdown}} />
                </BlogContent>
            </>) : 
            (<>
                <h1>Este blog não existe.</h1>
            </>)}

        </div>
    )
};

export default BlogTest;