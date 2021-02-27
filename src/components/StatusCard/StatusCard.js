import React from 'react';
import status from '../../status.js';
import { startDaemon, stopDaemon } from './Services/StopDaemonService.js';
import emailjs from 'emailjs-com';
import './StatusCard.css';

const StatusCard = () => {
    const statusValueLabel = status.value ? 'active' : 'down';

    const today = new Date();
    let events = JSON.parse(localStorage.getItem('events')) || [];

    const prevState = JSON.parse(localStorage.getItem('prevState'));

    if (prevState != status.value) {
        localStorage.setItem('prevState', status.value);

        const event = {
            id: events.length,
            event_status: status.value,
            event_date: today.toUTCString()
        }

        events.push(event);
        localStorage.setItem('events', JSON.stringify(events));
    }

    const handleStart = () => {
        console.log('start daemon');
        startDaemon();
    }

    const handleStop = () => {
        console.log('stop daemon');
        stopDaemon();
    }

    const handleEmail = () => {
        const serviceID = 'service_lj2jg0d';
        const templateID = 'template_sqqyjab';
        const userID = 'user_No6ZuM4QwsG7e0xLEVtQt';
        const templateParams = {
            db_status: statusValueLabel,
            db_ip: '192.168.100.36',
            event_time: events[events.length -1].event_date
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>DMBS status: <span className={status.value ? 'green-label' : 'red-label'}>{statusValueLabel}</span></h1>
                </div>
                <div className="col i-button-wrapper">
                    <button onClick={handleStart} type="button" className="i-button btn btn-primary">Start</button>
                    <button onClick={handleStop} type="button" className="i-button btn btn-danger">Stop</button>
                    <button onClick={handleEmail} type="button" className="i-button i-right btn btn-warning">Send last status</button>
                </div>
            </div>
            <p>{today.toUTCString()}</p>
            <hr />
        </div>
    );
}

export default StatusCard;
