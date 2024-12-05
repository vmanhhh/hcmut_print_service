import React, { useState, useEffect } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { QRPay, BanksObject } from 'vietnam-qr-pay';
import QRCode from 'qrcode';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const PaymentModal = ({ amount }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    useEffect(() => {
        generateQRCode();
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    function generateRandomCode(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const generateQRCode = () => {
        const qrPay = QRPay.initVietQR({
            bankBin: BanksObject.vietcombank.bin,
            bankNumber: '9981907003',
            amount: `${amount}`, // Số tiền
            purpose: generateRandomCode(10), // Nội dung chuyển tiền
        });
        const qrCodeString = qrPay.build();

        // Convert the QR code string to an image
        QRCode.toDataURL(qrCodeString, function (err, url) {
            if (err) {
                console.error(err);
                return;
            }
            setQrCodeUrl(url); // Set the base64 encoded image URL in the state
        });
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">VietQR</h2>

                    <p id="transition-modal-description">Quét mã QR để thanh toán</p>
                    {qrCodeUrl && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img src={qrCodeUrl} alt="QR Code" />
                        </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <p>Số tiền: {amount} VND</p>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default PaymentModal;