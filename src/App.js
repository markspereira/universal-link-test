import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const App = () => {
  const [daos, setDaos] = useState({aintNoSunshineWhenSheGone: true});
  useEffect(() => {

    const getDaos = async () => {
      console.log('Arc: ');
    }
    getDaos()
  }, [0]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SyntaxHighlighter language="javascript" style={{...docco, width:  '80%'}}>
            {JSON.stringify(daos)}
          </SyntaxHighlighter>Z
        </div>
      </header>
    </div>
  );
}

export default App;
