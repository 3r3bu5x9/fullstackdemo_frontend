import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className={'Nav'}>
                <ul>
                    <li>
                        <Link to={'/employees'}>Employees</Link>
                    </li>
                    <li>
                        <Link to={'/addemployee'}>Add</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}