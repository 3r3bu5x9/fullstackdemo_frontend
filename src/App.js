import {EmployeeProvider} from "./components/CounterContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import AllEmployeesTable from "./components/AllEmployeesTable";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

export default function App() {
    return (
        <EmployeeProvider>
            <BrowserRouter>
                <NavBar/>
                <div className={'Container'}>
                    <Routes>
                        <Route path={'/employees'} element={<AllEmployeesTable/>}></Route>
                        <Route path={'/addemployee'} element={<AddEmployee/>}></Route>
                        <Route path={'/editemployee'} element={<EditEmployee/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </EmployeeProvider>
    )
}