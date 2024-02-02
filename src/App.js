
import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {
  const[Word,setWord]=useState("");
  const[Dict,setDict]=useState("");
  function Handleget(event){
    if (event.key==='Enter'){
    get();
    }
  }
  function get() {
    axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${Word}`
    ).then((response) => {
      setDict(response.data[0]);
      console.log(response.data[0]);
      setWord("");
    })
    .catch((err)=>{
      console.log(err);
     });
  }
    return (
    <div className="outer">
      <div className='top'><h1>Free Dictionary</h1><img src={`../images/dict.png`} alt="img"/></div>
      <div className='box'>
        <input type="text" className='inp' placeholder='search here..'  onKeyDown={Handleget} value={Word} onChange={(e)=>{setWord(e.target.value);}
        }/>
        {/* <button onClick={get}>search</button> */}
      </div>
      {Dict &&(
      <div className='main'>
<h2>{Dict.word}</h2>
<h3>Part Of Speech:</h3>
<p>{Dict.meanings[0].partOfSpeech}</p>
<h3>Definition:</h3>
<p>{Dict.meanings[0].definitions[0].definition}</p>
<h3>Example</h3>
<p>{Dict.meanings[0].definitions[0].example}</p>
      </div>
      )}
    </div>
  );
}

export default App;
