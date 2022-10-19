import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../topic/Topic';
import './home.css'
import image from '../home/image/coderpic.png';
const Home = () => {
    const topics = useLoaderData()

    return (
        <div className='full-height'>
            
            <div className='part1'>
                <div className="home">
                    <h1>Online Quiz</h1>
                    <p className='homep'>Remote invigilation, or online proctoring, gives candidates the ability to sit a secure and invigilated online assessment from the comfort of their home, which is less stressful and saves time and money going to a test center. Read more about the benefits of online proctoring here.</p>
                </div>

                <div>
                    <img className='images' src={image} alt="" />
                </div>

            </div>
            <div className='topic-box'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    >

                    </Topic>)

                }

            </div>

        </div>
    );
};

export default Home;