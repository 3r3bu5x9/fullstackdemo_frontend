import {useState} from "react";
import axios from "axios";
import {EMPLOYEE_API_BASE_URL} from "./AllEmployeesTable";
import {useLocation, useNavigate} from "react-router-dom";

export default function EditEmployee(){
    const navigate = useNavigate();
    const location = useLocation()
    const [employee, setEmployee] = useState(JSON.parse(location.state));

    const HandleChange = event => {
        let {name, value} = event.target;
        setEmployee({...employee, [name]: value});
    }
    const SaveEmployee = () => {
        axios
            .put(EMPLOYEE_API_BASE_URL,employee)
            .then(()=>console.log("Employee details saved!"))
            .then(()=>navigate('/employees'));
    }
    return (
        <div className={'FormContainer'}>
            <h1>Edit Employee</h1>
            <br/>
            <div className={'FieldContainer'}>
                <label className={'FieldLabel'}>
                    Fist Name:
                    <br/>
                    <input name={'firstName'} type={'text'}

                           value={employee.firstName} onChange={HandleChange}/>
                </label>
                <label className={'FieldLabel'}>
                    Last Name:
                    <br/>
                    <input name={'lastName'} type={'text'}

                           value={employee.lastName} onChange={HandleChange}/>
                </label>
                <label className={'FieldLabel'}>
                    Email:
                    <br/>
                    <input name={'emailId'} type={'email'}

                           value={employee.emailId} onChange={HandleChange}/>
                </label>

            </div>
            <div className={'ButtonContainer'}>
                <button className={'BtnBlue'} onClick={SaveEmployee}>Save</button>
            </div>
        </div>
    )
}