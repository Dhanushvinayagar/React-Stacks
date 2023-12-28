import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'

const herosData = () => axios.get('http://localhost:5080/heros').then(res => res.data)

const postHeroData = (hero) => axios.post("http://localhost:5080/heros", hero).then(res => res.data)

const HeroQuery = () => useQuery({
    queryKey: ['herosData'],
    queryFn: herosData,
})

const AddHeroMutation = (queryClient) => useMutation({
    mutationFn: postHeroData,

    onSuccess : () => {                                 // if commented the post happens and after refreshing the browser you can refetch the data
        queryClient.invalidateQueries(['herosData'])            // This helps to identify the mutation happens during post , if not post happens but once after the refetch only the data re-renders
    }
})


export { HeroQuery, AddHeroMutation }