import React, { useState, useEffect } from 'react';
import './request.css';
import RequestItem from '../../components/requestItem/requestItem';
import { getAllPrintingReqs } from '../../api'; // Adjust the import path as necessary

const Request = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage
      try {
        const requestsData = await getAllPrintingReqs(token);
        setRequests(requestsData);
      } catch (error) {
        console.error("Failed to fetch requests:", error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className='request-container'>
      {requests.map((request) => (
        <RequestItem key={request.id} request={request} />
      ))}
    </div>
  );
}

export default Request;