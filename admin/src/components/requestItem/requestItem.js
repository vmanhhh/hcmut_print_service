import React from 'react'
import './requestItem.css'


const requestItem = () => {
  return (
        <div className='requestItem'>
            <div className='mssv'>
                <p>MSSV: 2213123</p>
            </div>

            <div className='file-name'>
            <p>File: "Software engineering final term...pdf</p>
            </div>

            <div className='printer-id'>
            <p>May in: H3-101</p>
            </div>
            <select className='select-state'>
                <option value="pending">Đã nhận được yêu cầu - chờ in</option>
                <option value="printing">Đã in xong - chờ nhận</option>
                <option value="printed">Đã giao tài liệu - hoàn tất</option>
            </select>
        </div>
  )
}

export default requestItem