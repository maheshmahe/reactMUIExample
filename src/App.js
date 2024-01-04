import './App.css';
import MUIDataTable from "mui-datatables";
import data from "./smalldata";
function App() {
  console.log(data);
  const columns = ["UUID", "Name", "Email", "Password"];
  /*const columns = [
    { label: "UUID", key: "uuid", sort: false },
    { label: "Name Name", key: "name", sort: false },
    { label: "Email", key: "email" },
    { label: "Password", key: "password" },
    {
      label: "Action",
      key: "action"
    }
  ];*/
  const options = {
    filterType: 'checkbox',
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          MUI datatables
        </p>
        <MUIDataTable
            data={data}
            columns={columns}
            options={options}
            title={"User Data"}
          />
      </header>
    </div>
  );
}

export default App;
