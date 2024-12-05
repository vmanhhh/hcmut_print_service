import React, { useState, useEffect } from 'react';
import './log.css';
import LogItem from '../../components/logItem/logItem';
import { getPrintingRequestByUserId } from '../../api'; // Adjust the import path as necessary

const LogPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage
      const userId = { id: 'DywMGT3eNFOsKRz2izw3' }; // Replace with the actual user ID
      try {
        const logsData = await getPrintingRequestByUserId(userId, token);
        setLogs(logsData);
      } catch (error) {
        console.error("Failed to fetch logs:", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className='log-container'>
      <div className='title'>
        <div className='file-name'>
          <p>Tên file</p>
        </div>
        <div className='state'>
          <p>Trạng thái</p>
        </div>
      </div>
      {logs.map((log) => (
        <LogItem
          key={log.id}
          name={`File: "${log.document.name}"`}
          state={log.status}
        />
      ))}
    </div>
  );
};

export default LogPage;