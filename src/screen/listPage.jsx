import { Link } from "react-router-dom"

const ListPage = () =>{
    return <div>
    <Link to="/">Home</Link>
    <h1>List Page</h1>
    <Link to="/detail">Detail</Link>

        <table>
            <tr>
                <td>Working hours</td>
                <td>Money</td>
            </tr>
            <tr>
                <td>1 hour</td>
                <td>200</td>
            </tr>
            <tr>
                <td>2 hour</td>
                <td>400</td>
            </tr>
            <tr>
                <td>3 hour</td>
                <td>600</td>
            </tr>
            <tr>
                <td>4 hour</td>
                <td>800</td>
            </tr>
            <tr>
                <td>5 hour</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>6 hours And 8 hours</td>
                <td>1400</td>
            </tr>
        </table>


    </div>
}

export default ListPage