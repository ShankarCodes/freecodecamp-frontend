import { Switch, Route } from 'react-router-dom';
import MarkdownPreviewer from './components/MarkdownPreviewer/MarkdownPreviewer';
import RandomQuoteMachine from './components/RandomQuoteMachine/Quotemachine';
import PomodoroClock from './components/PomodoroClock/PomodoroClock';
import TextInfo from './components/TextInfo/TextInfo';
import Calculator from './components/Calculator/Calculator';
import { Error404 } from './components/Errors/Errors';

import Navbar from './components/Navbar';
import './App.scss'
const Home = () => {
  return <div>
    <Navbar />
  </div>
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/mdpreview' component={MarkdownPreviewer} />
        <Route exact path='/quotes' component={RandomQuoteMachine} />
        <Route exact path='/text-info' component={TextInfo} />
        <Route exact path='/pomodoro' component={PomodoroClock} />
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/*' component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
