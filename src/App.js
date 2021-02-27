import DataTable from './components/DataTable/DataTable';
import StatusCard from './components/StatusCard/StatusCard.js';
import status from './status.js';
import './App.css'

function App() {

  return (
    <div className="container">
      <StatusCard />
      <DataTable />

      {/* TODO: show as footer */}
      <p>Powered by Daniel Espinosa</p>
    </div>
  );
}

export default App;
