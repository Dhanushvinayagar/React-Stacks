import React, { useEffect, useState } from 'react'
import { Select } from 'antd';

const Dropdown = (props) => {
    const data = props.data
    const [value, setValue] = useState(data[0].label)
    useEffect(()=>{
            props.handleClick(value,props.index)
    },[value])
    return (
        <div>
            <Select
                showSearch
                style={{
                    width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={data}
                value={value}
                onChange={(value) => setValue(value)}
            />
        </div>
    )
}

export default Dropdown
