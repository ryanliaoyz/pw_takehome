import { Outlet, Link } from "react-router-dom";
import './App.css';

export default function Navi() {
    return (
        <>
        <nav className="nav">
            <Link to="/" className="title">PeopleWeave Take Home</Link>
            <ul>
                 <li>
                    <Link to="/intro">Introduction</Link>
                </li>
                <li>
                    <Link to="/data">Data</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}