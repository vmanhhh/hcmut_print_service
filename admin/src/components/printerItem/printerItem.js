import React from 'react'
import './printerItem.css'
import CancelIcon from '@mui/icons-material/Cancel';

const printerItem = () => {
    return (
        <div className='printer-item'>
            <div className='location'>
                <p>H3-101</p>
            </div>
            <div className='model'>
                <p>Model: HP/Laser 107a 4ZB77A </p>
            </div>
            <div className='id'>
                <p>ID: 1</p>
            </div>

            <select className='select-state'>
                <option value="working">Đang hoạt động</option>
                <option value="fixing">Đang bảo trì</option>
            </select>
            <div className='remove-icon'><CancelIcon/></div>
        </div>
    )
}

export default printerItem