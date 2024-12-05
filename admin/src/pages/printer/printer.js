import React, { useState, useEffect } from 'react';
import './printer.css';
import PrinterItem from '../../components/printerItem/printerItem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getAllPrinters, addPrinter } from '../../api'; // Adjust the import path as necessary

const Printer = () => {
    const [printers, setPrinters] = useState([]);
    const [newPrinter, setNewPrinter] = useState({
        building: '',
        location: '',
        model: '',
    });

    useEffect(() => {
        const fetchPrinters = async () => {
            const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage
            try {
                const printersData = await getAllPrinters(token);
                setPrinters(printersData);
                console.log(printersData);
            } catch (error) {
                console.error("Failed to fetch printers:", error);
            }
        };

        fetchPrinters();
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPrinter((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddPrinter = async () => {
        const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage
        const printerData = {
            building: newPrinter.building,
            enabled: true,
            location: newPrinter.location,
            model: newPrinter.model,
            status: 'normal',
        };

        try {
            await addPrinter(printerData, token);
            setPrinters((prev) => [...prev, printerData]);
            alert('Add new printer successfully');
        } catch (error) {
            console.error("Failed to add printer:", error);
            alert('Failed to add printer');
        }
    };

    return (
        <div className='mother-container'>
            <div className='printer-container'>
                {printers.map((printer) => (
                    <PrinterItem key={printer.id} printer={printer} />
                ))}
            </div>
            <div className='add-printer'>
                <div className='tile-of-add-printer'>
                    <p>Thêm máy in</p>
                </div>
                <div className='location'>
                    <p>Vị trí</p>
                    <input
                        type='text'
                        name='location'
                        value={newPrinter.location}
                        onChange={handleInputChange}
                        placeholder='Dĩ An, Bình Dương'
                    />
                </div>
                <div className='model'>
                    <p>Model</p>
                    <input
                        type='text'
                        name='model'
                        value={newPrinter.model}
                        onChange={handleInputChange}
                        placeholder='HP/Laser 107a 4ZB77A'
                    />
                </div>
                <div className='building'>
                    <p>Tòa</p>
                    <input
                        type='text'
                        name='building'
                        value={newPrinter.building}
                        onChange={handleInputChange}
                        placeholder='H1-107'
                    />
                </div>
                <button className='add-button' onClick={handleAddPrinter}>
                    Xác nhận thêm máy in
                    <div><CheckCircleIcon /></div>
                </button>
            </div>
        </div>
    );
}

export default Printer;