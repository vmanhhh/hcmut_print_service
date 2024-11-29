
import React from 'react'
import './log.css'
import LogItem from '../../components/logItem/logItem'

const log = () => {
  return (
    <div className='log-container'>
        <div className='title'>
            <div className='date'>
                <p>Ngày</p>
            </div>
            <div className='file-name'>
                <p>Tên file</p>
            </div>

            <div className='state'>
                <p>Trạng thái</p>
            </div>
        </div>

        <LogItem date='12/08/2024' name='File: "Software engineering final term...pdf' state='Đã hoàn tất'/>
        <LogItem date='18/09/2022' name='File: "XSTK midterm...pdf' state='Đã hoàn tất'/> 
        <LogItem date='21/10/2022' name='File: "Đề thi GHK HK223.pdf' state='Đã hoàn tất'/> 
        <LogItem date='06/11/2022' name='File: "XSTK midterm...pdf' state='Đã hoàn tất'/> 
        <LogItem date='22/10/2022' name='File: "Asignment report HK241.pdf' state='Đã hoàn tất'/> 
    </div>
  )

}

export default log