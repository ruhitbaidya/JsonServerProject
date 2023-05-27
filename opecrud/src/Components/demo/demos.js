import React from 'react'
import { useGetAllUserQuery } from '../../fetcher/userData/userSlice';



const Demos = () => {
    const {isError, isFetching, isLoading, isSuccess, data} = useGetAllUserQuery();
    console.log(data)
  return (
    <div>
      {data && data.map((useer)=> <p key={useer.id}>{useer.name}</p>)}
    </div>
  )
}

export default Demos;
