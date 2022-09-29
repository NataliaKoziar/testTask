import './App.css';
import ActiveList from './components/activeNoteList/ActiveList';
import ArchiveList from './components/archiveNoteList/ArchiveList';

function App() {

  return (
    <div className="App">
      <ActiveList/>
      <ArchiveList/>
    </div>
  );
}

export default App;
