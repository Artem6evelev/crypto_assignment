import './App.css';
import { Provider } from 'react-redux'
import store from './reduxStore'
import Table from './components/Table'
import Search from './components/SearchBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table></Table>
        <Search />
      </div>
    </Provider>
  );
}

export default App;
