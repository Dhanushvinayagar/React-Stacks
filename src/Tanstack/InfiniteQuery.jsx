import React from 'react'
import { ColorInfiniteQuery } from './tanstack-query/postsQuery'

const InfiniteQuery = () => {


    const { isLoading, error, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = ColorInfiniteQuery()

    if (isLoading) return 'Loading'

    if (error) return 'Error'
    console.log(data);
    return (
        <div>
            <h2>
                Paginated Query
            </h2>

            {
                data &&
                data.pages.map((el, index) => (
                    <div key={index}>
                        {el.map((element, innerIndex) => (
                            <div key={innerIndex} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <p>{element.color}</p>
                                <p>{element.category}</p>
                                <p>{element.type}</p>
                            </div>
                        ))}
                    </div>
                ))
            }

            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more...</button>
            {
                isFetching && !isFetchingNextPage ? 'Fetching' : null
            }
        </div>
    )
}

export default InfiniteQuery
