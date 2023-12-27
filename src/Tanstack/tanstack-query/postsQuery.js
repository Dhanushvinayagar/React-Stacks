import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const postsData = () => axios.get('http://localhost:5080/posts').then(res => res.data)

// First letter Caps
const PostQuery = () => useQuery({
    queryKey: ['postsData'],
    queryFn: postsData,
    // cacheTime : 60 * 1000,           //background fetch  - this will update the data and store in cache based on the time (default time 5mins) update in the UI
    // staletime : 30 * 1000            //during navigation from one component to other and returning to initial component - when the data no need to fetch (in network ) immedialtely then it helps to display the cache (default time 0 )
    // refetchOnMount : false           // only first time during entering the component the data will be fetch then irrespective of number of times you switch to other component the fetch never occurs
    // refetchOnWindowFocus : true      // user data displayed is upto date on UI (default : true)
    // refetchInterval : 5000,                 //Pooling : -  similar to setInterval , refetch data based on specified time
    // refetchIntervalInBackground : true      // refetch data even when browser is not in focus (even when you are on another tab)

})


export { PostQuery }