

import React, { Suspense, useState } from 'react'
import UserTable from './UserTable'
import FilterForm from './FilterForm';

interface Props {
    searchParams: {
        sort: string;
        order: string;
        name:string;
        age:number;
        activeStatus:number;
    }
}

const UsersPage = (props: Props) => {
    const key = props.searchParams.sort;
    const order = props.searchParams.order;
    const name = props.searchParams.name;
    const age = props.searchParams.age;
    const activeStatus = props.searchParams.activeStatus;



  

    return (
        <>
            <div className='font-bold text-2xl mb-5'>UsersPage</div>

            <FilterForm />

            <Suspense fallback={<p>Loading...</p>}>
                <UserTable name={name} age={age} activeStatus={activeStatus} order={order} sort={key}></UserTable>
            </Suspense>
        </>

    )
}

export default UsersPage