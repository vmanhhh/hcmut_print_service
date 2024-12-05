import React from 'react';
import './requestItem.css';

const RequestItem = ({ request }) => {
    const filePath = `${process.env.PUBLIC_URL}/demo/${request.document.name}`;

    return (
        <div className='requestItem'>
            {/*<div className='mssv'>
        <p>MSSV: {request.user_id}</p>
      </div>*/ }


            <div className='file-name'>
                <p>File: <a href={filePath} download>{request.document.name}</a></p>
            </div>

            <div className='printer-id'>
                <p>Máy in: {request.properties.size}</p>
            </div>

            <div className='status'>
                <p>Trạng thái: </p>
            </div>

            {/*      <div className='created-at'>
        <p>Ngày tạo: {request.created_at.date} {request.created_at.time}</p>
      </div>

      <div className='completed-date'>
        <p>Ngày hoàn thành: {request.completed_date.date} {request.completed_date.time}</p>
      </div> */}

            <select className='select-state' defaultValue={request.status}>
                <option value="Đang in tài liệu">Đang in tài liệu</option>
                <option value="Đã in tài liệu thành công">Đã in tài liệu thành công</option>
                <option value="Đã giao tài liệu thành công">Đã giao tài liệu thành công</option>
            </select>
        </div>
    );
};

export default RequestItem;