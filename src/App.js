import './App.css';
import MUIDataTable from "mui-datatables";
import data from "./smalldata";
import { useEffect, useState } from 'react';
function App() {
  const [loadTable,setLoadTable] = useState(true);
  const columns = ["UUID", "Name", "Email", "Password"];
  useEffect(()=>{
    //setLoadTable(true);
}, [])
  const options = {
    filterType: "dropdown",
    filter: false
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>
          MUI datatables
        </p>
        {
          loadTable &&
          <MUIDataTable
            data={data}
            columns={columns}
            options={options}
            title={"User Data"}
          />
        }
        
      </header>
    </div>
  );
}

export default App;
