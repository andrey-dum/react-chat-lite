import React from 'react';
import './App.css';

import socket from './socket';
import JoinBlock from './components/JoinBlock';
import Chat from './components/Chat';


function App() {
  const connectSocket = () => {
   
  }

  return (
    <div className="wrapper">
      <button onClick={connectSocket}>CONNECT</button>
        <JoinBlock />

        {/* <Chat /> */}

    </div>
  );
}

export default App;
