'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const FilterForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [activeStatus, setActiveStatus] = useState('0');
  
    const queryString = `?name=${name}&age=${age}&activeStatus=${activeStatus}&sort=id&order=asc`;
    
    return (

        <>
            <div style={{alignItems:'flex-end'}} className='flex space-x-5'>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="activeStatus">Active Status</label>
                    <select
                        className='form-control'
                        value={activeStatus}
                        onChange={(e) => setActiveStatus(e.target.value)}
                    >
                        <option value='0'>All</option>
                        <option value='1'>Yes</option>
                        <option value='2'>No</option>
                    </select>
                </div>
                <Link className='btn btn-primary' href={`/users${queryString}`} >
                    Filter
                </Link>
            </div>
        </>
    )
}

export default FilterForm