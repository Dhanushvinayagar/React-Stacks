import React from 'react'

import Usememo from './Usememo'
import Usecallback from './Usecallback'

const Memorize = () => {

    console.log("Parent Rendered");
    return (
        <div>
            Memorize
            <Usecallback  />
            <br />
            <Usememo />
        </div>
    )
}

export default Memorize
