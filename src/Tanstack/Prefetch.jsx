import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import axios  from 'axios'
import { HeroQueryClick } from './tanstack-query/mutation'

const PrefetchData = () => axios.get('http://localhost:5080/heros').then(res => res.data)

const Prefetch = () => {
  const queryClient = useQueryClient()

  const {data ,isLoading , error , refetch}= HeroQueryClick()

  const prefetchData = () => {
    // Pre cache the data before being click the button (helps during navigation / routing )
      queryClient.prefetchQuery({
        queryKey : ["herosData"],
        queryFn : PrefetchData,
        staleTime : 7000          // helps to control refetch with subsequent hovering of data after 7 seconds
      })
  }
  console.log(data);
  if(isLoading) return 'Loading'
  if (error) return 'Error'

  return (
    <div>
      <h2>Prefetch Data</h2>
      <button onMouseEnter={prefetchData} onClick={refetch}>Prefetch data on button hover </button>

      {
        data?.map(el=>
        <>
          <p>{el.name} - {el.superhero}</p>
        </>)
      }
    </div>
  )
}

export default Prefetch
