import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

const CustomButton = ({ text, onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default CustomButton;