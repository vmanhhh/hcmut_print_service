import React from 'react'
import './logItem.css'

const logItem = ({date, name, state}) => {
    return (
        <div className='log-item'>
            <div className='file-name'>
                <p>{name}</p>
            </div>

            <div className='state'>
                <p>{state}</p>
            </div>
        </div>
    )
}

export default logItem