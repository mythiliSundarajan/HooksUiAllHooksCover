import logo from './logo.svg';
import './App.css';
import UseStateLearn from './Hooks/UseStateLearn';
import UseEffectLearn from './Hooks/UseEffectLearn';
import UseRefLearn from './Hooks/UseRefLearn';
import UseReducerLearn from './Hooks/UseReducerLearn';
import UseCallBackLearn from './Hooks/UseCallBackLearn';
import { Row ,Col} from 'reactstrap';
import { createContext } from 'react';
export const cardTtileContext =createContext()
function App() {
  const text={
    title1:'Use State',
    title2:'Use Effect',
    title3:'Use Ref',
    title4:'Use Reducer'



  }
  return (
    <div className="App">
      <cardTtileContext.Provider value={text}>
      <Row>
        <Col md='3'>
        <UseStateLearn></UseStateLearn>
        </Col>
        <Col md='3'>
        <UseEffectLearn></UseEffectLearn>
        </Col>
        <Col md='5'>
        <UseRefLearn></UseRefLearn>
        </Col>
        <Col md='5'>
        <UseReducerLearn></UseReducerLearn>
        </Col>
        <Col md='5'>
        <UseCallBackLearn></UseCallBackLearn>
        </Col>
      </Row>
      </cardTtileContext.Provider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
