import React, { useState } from 'react'
import { AddHeroMutation, HeroQuery } from './tanstack-query/mutation'

const Mutation = () => {
    const [name, setName] = useState('')
    const [nick, setNick] = useState('')

    const { isLoading, error, data } = HeroQuery()
    const { mutate ,isLoading : load , error : err } = AddHeroMutation()

    if (isLoading || load) return 'Loading...'
    if (error || err ) return 'Error' + err

    const handleClick = () =>{
        if(name && nick){
            mutate({ id : data.length+1 ,name, superhero:nick})
        }
    }
    return (
        <div>
            <h2>Mutation</h2>
            <div className="addhero">
                <p>Name : </p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <p>Superhero name : </p>
                <input type='text' value={nick} onChange={(e) => setNick(e.target.value)} />
                <button onClick={() => handleClick()}>Add</button>
            </div>

            {
                data.map((hero, index) =>
                    <div key={index} style={{ display: 'flex', margin: '1% 0 0 10%' }}>
                        <p>{hero.name}</p>    -
                        <p>{hero.superhero}</p>
                    </div>)
            }
        </div>
    )
}

export default Mutation
