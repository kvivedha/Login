import React from 'react';
import FormField from '../Component/formField';
import logo from '../assets/logoo.webp';

const Dashboard = () => {
    return (
        <>
            <div className='card main-card m-4 w-50'>
                <div className='card-header'>
                    <img src={logo} alt='user_profile_image' className='position-relative' style={{ width: '30%', top: '-50%' }} />
                </div>
                <div className='card-body'>
                    <FormField />
                </div>
                <div className='card-footer'></div>

            </div>
        </>

    )
}

export default Dashboard
