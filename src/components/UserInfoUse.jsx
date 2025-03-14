import React from 'react';
import { useState } from 'react';

const UserInfoUse = () => {
    const [user,setUser] = useState({name: "",age:0,hobbies:[]})
    console.log(user);
    return (
        <form>
            <input onChange={(e)=>setUser({...user,name:e.target.value})} className='border border-purple-300 m-10' type="text" name='name' />
            <input onChange={(e)=>setUser({...user,age:e.target.value})} className='border border-purple-300 m-10' type="text" name='age' />
            <input onBlur={(e)=>setUser({...user,hobbies: [...user.hobbies,e.target.value]})} className='border border-purple-300 m-10' type="text" name='hobbies' />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default UserInfoUse;