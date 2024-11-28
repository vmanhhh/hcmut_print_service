import React from 'react'
import './logItem.css'

const logItem = () => {
    return (
        <div className='log-item'>
            <div className='date'>
                <p>22/10/2024</p>
            </div>

            <div className='mssv'>
                <p>2213765</p>
            </div>

            <div className='file-name'>
                <p>File: "Software engineering final term...pdf</p>
            </div>

            <div className='state'>
                <p>Đã hoàn tất</p>
            </div>
        </div>
    )
}

export default logItem