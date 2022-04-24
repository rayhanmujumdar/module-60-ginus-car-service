import React from 'react';
import expert1 from '../../../../images/experts/expert-1.jpg'
import expert2 from '../../../../images/experts/expert-2.jpg'
import expert3 from '../../../../images/experts/expert-3.jpg'
import expert4 from '../../../../images/experts/expert-4.jpg'
import expert5 from '../../../../images/experts/expert-5.jpg'
import expert6 from '../../../../images/experts/expert-6.png'
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import Expert from '../Expert/Expert';
const Experts = ({title}) => {
    const experts = [
        {id: 1, name: 'will smith', img: expert1},
        {id: 2, name: 'Chris Rock', img: expert2},
        {id: 3, name: 'Dwayne Rock', img: expert3},
        {id: 4, name: 'Messy vai', img: expert4},
        {id: 5, name: 'Ronaldo Bro', img: expert5},
        {id: 6, name: 'Stachy jhonson', img: expert6}
    ]
    console.log(title)
    return (
        <div className='my-10'>
            <PageTitle title={title || 'home'}></PageTitle>
            <h1 className='text-center text-4xl font-semibold font-mono py-5'>Our experts</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert = {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;