import Table from "../components/Table";
import {Link} from 'react-router-dom'

const HomePage = () =>{
    const data = [{"name":"Aman","age":45},{"name":"Arun","age":65},{"name":"Anil","age":55}];
    return (
        <>
        <Table x={data}/>
        <Link to="/list">go to list</Link>
        </>
    )
}

export default HomePage