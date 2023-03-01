import {useState} from "react";
import axios from "axios";
import {EMPLOYEE_API_BASE_URL} from "./AllEmployeesTable";
import {useNavigate} from "react-router-dom";

export default function AddEmployee(){
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({firstName:"", lastName:"", emailId:""});
    const HandleChange = event => {
        let {name, value} = event.target;
        setEmployee({...employee, [name]: value});
    }
    const AddEmployee = () => {
        axios
            .post(EMPLOYEE_API_BASE_URL,employee)
            .then(()=>console.log("Employee added!"))
            .then(()=>navigate('/employees'));
    }
    return (
        <div className={'FormContainer'}>
            <h1>Add Employee</h1>
            <br/>
            <div className={'FieldContainer'}>
                <label className={'FieldLabel'}>
                    Fist Name:
                    <br/>
                    <input name={'firstName'} type={'text'} placeholder={'Enter first name'}

                           value={employee.firstName} onChange={HandleChange}/>
                </label>
                <label className={'FieldLabel'}>
                    Last Name:
                    <br/>
                    <input name={'lastName'} type={'text'} placeholder={'Enter last name'}

                           value={employee.lastName} onChange={HandleChange}/>
                </label>
                <label className={'FieldLabel'}>
                    Email:
                    <br/>
                    <input name={'emailId'} type={'email'} placeholder={'Enter email id'}

                           value={employee.emailId} onChange={HandleChange}/>
                </label>

            </div>
            <div className={'ButtonContainer'}>
                <button className={'BtnGreen'} onClick={AddEmployee}>Add</button>
            </div>
        </div>
    )
}