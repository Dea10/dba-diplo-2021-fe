import React from 'react';
import './DataTable.css';

const DataTable = () => {

    const events = JSON.parse(localStorage.getItem('events'));

    return (
        <div className="container">
            <h3>DBMS log record</h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">DBMS</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {events &&
                        events.reverse().map( (event, idx) => 
                            <tr key={event.id}>
                                <th scope="row">{event.id}</th>
                                <td>192.168.100.36</td>
                                <td className={event.event_status ? 'green-label' : 'red-label'}>{event.event_status ? 'active' : 'down'}</td>
                                <td>{event.event_date}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;