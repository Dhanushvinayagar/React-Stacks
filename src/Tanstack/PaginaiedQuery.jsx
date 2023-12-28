import React, { useState } from 'react'
import { ColorQuery } from './tanstack-query/postsQuery'

const PaginaiedQuery = () => {

    const [pageNumber , setPageNumber] = useState(1)

    const { isLoading, error, data , isFetching } = ColorQuery(pageNumber)

    if (isLoading) return 'Loading'

    if (error) return 'Error'

    return (
        <div>
            <h2>
                Paginated Query 
                <div>
                    <input type='number' value={pageNumber} min={0} onChange={e=>setPageNumber(e.target.value)} />
                </div>
            </h2>
            {
                data && data.map(element =>
                 <div style={{display: 'flex' , justifyContent : 'space-around'}}>
                    <p>{element.color}</p>
                    <p>{element.category}</p>
                    <p>{element.type}</p>
                </div>)
            }
            {
                    isFetching && 'Loading'
            }
        </div>
    )
}

export default PaginaiedQuery
