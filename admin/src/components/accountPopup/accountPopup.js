import React from 'react'
import './accountPopup.css'

const accountPopup = () => {
  return (
    <div className='container'>
        <div className='account-name'>
            <h>Nguyễn Văn A</h>
        </div>
        <p> SYSTEM ADMIN</p>
        <div>
            <button className='logout-button'>Đăng xuất</button>
        </div>
    </div>
  )
}

export default accountPopup