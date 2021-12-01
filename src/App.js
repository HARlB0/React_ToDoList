import './App.css';
import React, { useState, useEffect } from 'react';
import add from './img/add.png';
import check from './img/check.png';
import delete_button from './img/delete.png';
import pencil from './img/pencil.png';
import rec from './img/rec.png';

function App() {
  const [button, setButton] = useState(false);

  const todo_content = () => {
    
  }

  return (
    <div className="bg">
      <div className="todolist">
        <div className="list_box">
          <div className="title">
            <h1>TO DO LIST</h1>
          </div>
          <div className="add">
            <div className="input_box">
              <input />
            </div>
            <div className="add_button">
              <img src={add} />
            </div>
          </div>
          <div className="body">
            <div className="content">
              <div className="check">
                <div className="check_img" onClick={() => { setButton(!button) }}>
                  {button == false ?
                    <img src={rec} />
                    :
                    <img src={check} />
                  }
                </div>
                <ul>
                  <li>간지나게 숨쉬기</li>
                </ul>
              </div>
              <div className="modify">
                <img id="pencil" src={pencil} />
                <img src={delete_button} />
              </div>
            </div>
            <div className="content">
              <div className="check">
                <div className="check_img" onClick={() => { setButton(!button) }}>
                  {button == false ?
                    <img src={rec} />
                    :
                    <img src={check} />
                  }
                </div>
                <ul>
                  <li>간지나게 숨쉬기</li>
                </ul>
              </div>
              <div className="modify">
                <img id="pencil" src={pencil} />
                <img src={delete_button} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
