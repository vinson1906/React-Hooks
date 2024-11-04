import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom';

const Studentlogin = () => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate()

    function formval(e) {
        e.preventDefault();
        if (Username === 'vinson' && password === 'vinson1906') {
            nav('/Studentresult')
        }
        else {
            alert("incorrect username or password")
        }
    }

    return (
        <>
            <div className='flex justify-center items-center h-[90vh] flex-col'>
                <div className=' flex flex-col items-center shadow-lg w-2/5 rounded-xl '>
                    <h1 className=' text-4xl font-bold text-center'><span className='text-green-600'>SSM</span> Collage Of Engineering</h1>
                    <h1 className='text-3xl text-gray-500 my-4'>Fill The Form!</h1>
                    <form onSubmit={formval} className='w-3/5'>
                        <div className='flex flex-col w-full'>
                            <lable htmlFor='Username'>Username</lable>
                            <input name='Username' placeholder='User name' value={Username} type="text" className='mb-4 w-full border-2 border-gray-500 rounded-sm' onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor='Password'>Password</label>
                            <input name='Password' placeholder='Student password' value={password} type="password" className='mb-4 w-full border-2 border-gray-500 rounded-sm' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='px-4 w-full'>
                            <button type='submit' className='flex items-center justify-center mb-4 w-full h-8 bg-blue-600 text-white rounded-sm'>
                                submit
                            </button>
                        </div>
                    </form>
                </div>
                <Link to="/Teacherlogin">
                <button className='text-blue-500'>
                    Teacher Login
                </button>
                </Link>
            </div>

        </>
    )
}

export default Studentlogin