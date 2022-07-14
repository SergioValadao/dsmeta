
import DatePicker from 'React-DatePicker'
import "react-datepicker/dist/react-datepicker.css"
import NotificationButton from '../NotificationButton'
import './index.css'
import React, { useState } from "react"

function SalesCard() {

    const mindate = new Date(new Date().setDate(new Date().getDate()-365))
    const maxdate = new Date()
    const [minDate, getminDate] = useState(mindate)
    const [maxDate, getMaxdate] = useState(maxdate)

    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div>
                <div className="dsmeta-form-control">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => getminDate(date)}
                        className="inputcontrol"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => getMaxdate(date)}
                        className="inputcontrol"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-tabela">
                    <thead>
                        <th className="showdata">Data</th>
                        <th className="showMax">Id</th>
                        <th>Vendedor</th>
                        <th className="showMax">Visitas</th>
                        <th className="showMax">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="showMax">Id</td>
                            <td className="showdata">09/07/2022</td>
                            <td>Sergio Valadão</td>
                            <td className="showMax">322</td>
                            <td className="showMax">312</td>
                            <td>R$ 5.000,00</td>
                            <td>
                                <div className="btn">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="showMax">Id</td>
                            <td className="showdata">09/07/2022</td>
                            <td>Leila Santos</td>
                            <td className="showMax">12</td>
                            <td className="showMax">13</td>
                            <td>R$ 8.000,00</td>
                            <td>
                                <div className='btn'>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default SalesCard