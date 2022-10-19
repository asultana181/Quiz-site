import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Examon from '../Examon/Examon';
import './start.css'

const StartPractice = () => {
    const load = useLoaderData()


    console.log(load)

    return (
        <div>
            <h2 className='text-center m-5 quizname fw-bolder'>Quiz of {load.data.name}</h2>
            {
                load.data.questions.map(ques => <Examon
                    key={ques.id}
                    ques={ques}
                   
                ></Examon>)
               
            }
        </div>
    );
    

};

export default StartPractice;