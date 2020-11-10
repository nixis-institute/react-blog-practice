const Table=({x})=>{
    console.log(x)
    return (
    <div> 
    <h2 style={{"fontSize":"2em","color":"blue"}} >Table </h2>
      <table border="1">
          <tr>
            <td style={{'color':"red","fontWeight":"bold"}}>Name</td>
            <td>Age</td>
          </tr>
            {
                x.map((e)=>
                    <tr>
                        <td>{e.name}</td>
                        {   
                            e.age>50
                            ?<td style={{color:"red"}}>{e.age}</td>
                            :<td>{e.age}</td>
                        }
                    </tr>
                )
            }
        </table>
      </div>)
  }

export default Table;