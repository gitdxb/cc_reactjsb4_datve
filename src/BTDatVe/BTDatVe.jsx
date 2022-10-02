import React, { Component } from 'react'
import seatArray from './danhSachGhe.json'

export default class BTDatVe extends Component {

    renderSeatSelection = () => {
        return <div className="seatStructure text-center">
            <table id="seatsBlock">
                <tbody>
                    <tr>
                        <td />
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td />
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A5" disabled />
                        </td>
                        <td className="seatGap" />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="A12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="B12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="C12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="D12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>E</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="E12" disabled />
                        </td>
                    </tr>
                    <tr className="seatVGap" />
                    <tr>
                        <td>F</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="F12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>G</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="G12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>H</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="H12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>I</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="I12" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>J</td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J1" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J2" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J3" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J4" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J5" disabled />
                        </td>
                        <td />
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J6" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J7" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J8" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J9" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J10" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J11" disabled />
                        </td>
                        <td>
                            <input type="checkbox" className="seats" defaultValue="J12" disabled />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
    render() {
        
        return (
            // let { hang, danhSachGhe : { soGhe }} = this.seatArray;
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
                    { this.renderSeatSelection() };

                    {/* Screen */}
                    <div className="screenDirect my-3">
                        <p>SCREEN THIS WAY</p>
                    </div>
                    <div className='container-fluid my-3'>
                        <button className='btn btn-light'>Confirm Selection</button>
                    </div>

                    {/* Table */}
                    <table className="userInfo table table-striped table-light">
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
