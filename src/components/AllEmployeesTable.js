import {MDBTable} from "mdb-react-ui-kit";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import CounterContext from "./CounterContext";
import {useNavigate} from "react-router-dom";

export const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/emp"

export default function AllEmployeesTable() {
    const [employees, setEmployees] = useState([]);
    const {counter} = useContext(CounterContext)
    const {setCounter} = useContext(CounterContext)
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(EMPLOYEE_API_BASE_URL)
            .then((response) => {
                setEmployees(() => response.data)
            })
            .then(setCounter(() => employees.length));
    }, [])

    useEffect(() => {
        axios
            .get(EMPLOYEE_API_BASE_URL)
            .then((response) => {
                setEmployees(() => response.data)
            });
    }, [counter])

    function DeleteEmployee(emp) {
        console.log(EMPLOYEE_API_BASE_URL + '/' + emp.id)
        axios
            .delete(EMPLOYEE_API_BASE_URL + '/' + emp.id)
            .then(() => setCounter(p => p - 1))
            .then(() => console.log("Employee " + emp.id + " deleted!"))
    }

    function EditEmployee(emp) {
        navigate('/editemployee', {state: JSON.stringify(emp)})
    }

    return (
        <div className={'TableContainer'}>
            <MDBTable
                striped hover color={'dark'}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(emp =>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.emailId}</td>
                            <td>
                                <button className={'btn-dark'} onClick={() => EditEmployee(emp)}>✏️</button>
                                <button className={'btn-dark'} onClick={() => DeleteEmployee(emp)}>❌</button>
                            </td>
                        </tr>
                    )
                }
                <tr>
                    <td colSpan={5}>
                        <center>
                            <button className={'btn-dark'} onClick={() => navigate('/addemployee')}>➕</button>
                        </center>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>
            </MDBTable>
        </div>
    )
}