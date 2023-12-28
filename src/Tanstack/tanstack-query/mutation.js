import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'

const herosData = () => axios.get('http://localhost:5080/heros').then(res => res.data)

const postHeroData = (hero) => axios.post("http://localhost:5080/heros", hero).then(res => res.data)

const HeroQuery = () => useQuery({
    queryKey: ['herosData'],
    queryFn: herosData,
})

const AddHeroMutation = () => useMutation({
    mutationFn: postHeroData
})


export { HeroQuery, AddHeroMutation }