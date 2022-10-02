import React, { Component } from 'react'

export default class BTDatVe extends Component {
    render() {
        return (
            <div className="container">
                <h1 className='py-3 font-weight-bold h1 text-white'>MOVIE SEAT SELECTION</h1>
                <div className="seatWrapper">
                    <p className='h5 font-weight-bold text-warning'>Fill The Required Details Below And Select Your Seats</p>
                    {/* User input */}
                    <form className='py-3 container-fluid'>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name" className='font-weight-bold d-flex text-white'>Name </label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="noOfSeat" className='font-weight-bold d-flex text-white'>Number of Seats</label>
                                <input type="text" className="form-control" id="noOfSeat" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning d-flex">Start Selecting</button>
                    </form>
                    {/* Guideline */}
                    <ul className='myItem py-3'>
                        <li className='list-inline-item text-white'><span id='item1' className='mr-2 myBox'></span>Selected Seat</li>
                        <li className='list-inline-item text-white'><span id='item2' className='mr-2 myBox'></span>Reserved Seat</li>
                        <li className='list-inline-item text-white'><span id='item3' className='mr-2 myBox'></span>Empty Seat</li>
                    </ul>
                    {/* User seats  */}

                    {/* Screen */}
                    <div className="screenDirect my-3">
                        <p>SCREEN THIS WAY</p>
                    </div>
                    <div className='container-fluid my-3'>

                        <button className='btn btn-light'>Confirm Selection</button>
                    </div>

                    {/* Table */}
                    <table className="table table-striped table-light">
                        <thead className='thead-dark'>
                            <tr>
                                <th>Name</th>
                                <th>Number of Seats</th>
                                <th>Seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <p className='text-white m-0 py-3'>© 2022 Movie Seat Selection . by Thế Tâm | CyberClass DN04</p>
            </div>
        )
    }
}
