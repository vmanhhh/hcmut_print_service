import React from 'react';
import './printerItem.css';
import CancelIcon from '@mui/icons-material/Cancel';

const PrinterItem = ({ printer }) => {
    return (
        <div className='printer-item'>
            <div className='location'>
                <p>{printer.location}</p>
            </div>
            <div className='model'>
                <p>Model: {printer.model}</p>
            </div>
            <div className='building'>
                <p>Tòa: {printer.building}</p>
            </div>

            <select className='select-state'>
                <option value="working">Đang hoạt động</option>
                <option value="fixing">Đang bảo trì</option>
            </select>
            <div className='remove-icon'><CancelIcon /></div>
        </div>
    );
};

export default PrinterItem;