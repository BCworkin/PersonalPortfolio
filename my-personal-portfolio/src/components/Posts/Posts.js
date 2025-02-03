import React from 'react';
import './Posts.css';
import Card from '../../Card';

const Posts = () => {
    return (
        <div>
            <h2>Related Posts</h2>
            <div className='card-container'>
                <Card link=""
                image="https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg"
                title="Checking out cat memes."
                description="Cats are just so fun to watch."/>
                <Card link=""
                image="https://upload.wikimedia.org/wikipedia/commons/e/ee/Mrdavidblaine.jpeg"
                title="Unsolving David Blaine's Mysteries."
                description="I always wondered how David Blaine became David Blaine."/>
            </div>
        </div>
    )

}

export default Posts;