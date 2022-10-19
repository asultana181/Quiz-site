import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './examon.css';
const Examon = ({ ques }) => {
    console.log(ques)
    const { id, question, correctAnswer } = ques;
    // const{options}=ques1
    // let q=ques.options

    // const{id,question}=props

    const showanswer = () => {
        // console.log(correctAnswer )

        alert(' Answer : ' + correctAnswer)
    }

    const currectans = (option) => {

        if (option === correctAnswer) {


            alert('Success, your answer is correct ');
        }

        else {
            alert('Your answer is wrong');
        }


    }
    return (
        <div className='body'>
            <div className='question p-3'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h5>question : {question}</h5>
                    </div>
                    <div>
                        <button className='ans-btn' onClick={showanswer}>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>

                <ul>
                    {
                        ques.options.map(option =>

                            <div class="form-check">


                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1 "
                                 onClick={() => currectans(option)}></input>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    {option}
                                </label>
                            </div>

                        )
                    }
                </ul>
            </div>

        </div>
    );
};

export default Examon;