import React from 'react';
import { Link } from 'react-router-dom';
import './topic.css'
const Topic = (props) => {

    const { id, name, logo, total } = props.topic
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div className='d-flex justify-content-between info '>
                <div className='mx-2 details'>
                    <p className='fs-5 fw-bolder text-primary name'> {name}</p>
                    <p>Total Mcq : {total}</p>
                </div>

                <div className='btnstart' >
                    <button type="button" class="btn btn-primary "  >
                        <Link className='text-white link ' to={`/startpractice/${id}`}>Start Practice</Link>
                    </button>

                </div>
            </div>


        </div>
    );
};

export default Topic;