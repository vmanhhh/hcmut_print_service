import React from 'react'
import './printer.css'
import PrinterItem from '../../components/printerItem/printerItem'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const printer = () => {
    return (
        <div className='mother-container'>
            <div className='printer-container'>
                <PrinterItem/>
                <PrinterItem/>
                <PrinterItem/>
                <PrinterItem/>
                <PrinterItem/>
                <PrinterItem/>
                <PrinterItem/>
                <PrinterItem/>
            </div>
            <div className='add-printer'>
                <div className='tile-of-add-printer'>
                    <p>Thêm máy in</p>
                </div>
                <div className='location'>
                    <p>Vị trí</p>
                    <input type='text' placeholder='H3-101'/>
                </div>
                <div className='model'>
                    <p>Model</p>
                    <input type='text' placeholder='HP/Laser 107a 4ZB77A'/>
                </div>
                <div className='id'>
                    <p>ID</p>
                    <input type='text' placeholder='1'/>
                </div>
                <button className='add-button'>Xác nhận thêm máy in
                <div> <CheckCircleIcon/></div>
                </button>
            </div>
        </div>
    )
}

export default printer