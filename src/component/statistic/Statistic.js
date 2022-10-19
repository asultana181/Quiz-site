import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Treemap, ResponsiveContainer, PieChart, Pie } from 'recharts';


const Statistic = () => {
    // const loader=useLoaderData()
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const examinfo = data.data.data
                console.log(examinfo)
                const examdetails = examinfo.map(nametotal => {
                    const singlenametotal = {
                        name: nametotal.name,
                        total: nametotal.total
                    }
                    return singlenametotal;
                })
                console.log(examdetails)
                setdata(examdetails)
            });
    }, [])



    return (
        <div >
            <dir className='d-flex justify-content-center'>
                <BarChart  width={500} height={500} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </dir>


            {/* <div>
                <Treemap width={400} height={200} data={data} dataKey="total" ratio={4 / 3} stroke="#fff" fill="#8884d8" >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </Treemap>
            </div> */}



        </div>

    );
};

export default Statistic;