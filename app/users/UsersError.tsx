import React from 'react'
interface Props{
  error:string
}
const UsersError = ({error}: Props) => {
  return (
    <div className='text-red-600 font-bold mt-3'>{error}</div>
  )
}

export default UsersError