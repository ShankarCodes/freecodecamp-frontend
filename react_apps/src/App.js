import {Switch, Route} from 'react-router-dom';
import MarkdownPreviewer from './components/MarkdownPreviewer/MarkdownPreviewer';
import Navbar from './components/Navbar';
import './App.scss'
const Home = () => {
  return <div>
    <Navbar/>
  </div>
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/mdpreview' component={MarkdownPreviewer} />
      </Switch>
    </div>
  );
}

export default App;
