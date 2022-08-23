import './App.css';
import Dashboard  from './components/DashBoard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const { loading, data, error } = useHello();
  // if(loading) return <div> loading... </div>
  // if(error) return <div> error occured... </div>
  // console.log(data)
  return (
    <BrowserRouter>

      <Dashboard/>
    </BrowserRouter>
  );
}

export default App;
