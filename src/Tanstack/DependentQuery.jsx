import React, { useState } from 'react'
import { StudentQuery, StaffQuery } from './tanstack-query/postsQuery';


// Based on data from one fetch the data of other depends
const DependentQuery = () => {
    const [id, setId] = useState(1)
    const { isLoading, error, data:student } = StudentQuery(id)
    // console.log(data);
    const { isLoading: loading, error: err, data: staff } = StaffQuery(student?.staffId)
    // console.log(staff);
    if (isLoading || loading) return 'Loading'
    if (error || err) return 'Error'

    return (
        <div>
            Dependent Query :
            <input type='number' value={id} onChange={(e) => setId(e.target.value)} />
            <h3>Student</h3>
            <p>{student.id}-{student.name}  </p>
            <h3>Staff</h3>
            <p>{student.staffId} - {staff.name}</p>
        </div>
    )
}

export default DependentQuery
