import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {getArc} from "./arc";

const Arc = require('@daostack/client').Arc;

// const Arc = require('../dist/lib/index.js').Arc

var util = require('util');

// const graphHttpLink =
//   'https://api.thegraph.com/subgraphs/name/daostack/v7_5_exp_rinkeby';
// const graphwsLink =
//   'wss://api.thegraph.com/subgraphs/name/daostack/v7_5_exp_rinkeby';

const graphHttpLink =
  'https://api.thegraph.com/subgraphs/name/daostack/alchemy';
const graphwsLink =
  'wss://api.thegraph.com/subgraphs/name/daostack/alchemy';

// create an Arc instance
const arc = new Arc({
  graphqlHttpProvider: graphHttpLink,
  graphqlWsProvider: graphwsLink,
  web3Provider: `wss://rinkeby.infura.io/ws/v3/${'4406c3acf862426c83991f1752c46dd8'}`,
  ipfsProvider: {
    "host": "subgraph.daostack.io",
    "port": "443",
    "protocol": "https",
    "api-path": "/ipfs/api/v0/"
  }
});

const App = () => {
  const [daos, setDaos] = useState({});
  useEffect(() => {

    const getDaos = async () => {
      console.log('Arc: ', arc);
      arc
        .daos({orderBy: 'name', orderDirection: 'asc'}, {fetchAllData: true})
        .subscribe(res => {
          res.map(dao => {
            let daoObject = util.inspect(dao.coreState)
            setDaos(daoObject);
            const {name, id, memberCount, tokenName} = dao.coreState;
            if (name === 'Mango DAO') {
              console.log('mango', dao)
            }
            console.log('2 query : ', dao);

          })
        });
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
