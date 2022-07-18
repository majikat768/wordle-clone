import Board from './Board'
import Keyboard from './Keyboard'
import './app.css'
import { wordlist } from './smallwords';
import React, { useEffect, useState } from 'react';

export const AppContext = React.createContext();

function get_random_word() {
  return wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase();
}

function isalpha(c) {
  if (c.length > 1) return false;
  let val = c.toUpperCase().charCodeAt();
  return val >= 65 && val <= 90;
}

const board = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

const word = get_random_word();
//const word = "DOTTY"
console.log(word)

var disabled_letters = [];
function disable_letters(word) {
  for (let i = 0; i < word.length; i += 1) {
    if (!disabled_letters.includes(word[i])) {
      disabled_letters.push(word[i]);
    }
  }
}

var gameover = false;

function App() {
  const [attempt, SetAttempt] = useState(0);
  const [letter, SetLetter] = useState(0);

  const HandleKey = function (key) {
    if (gameover) return;
    if (key === 'Delete' || key === 'BACKSPACE') {
      if (letter > 0) {
        board[attempt][letter - 1] = '';
        SetLetter(letter - 1)
      }
    }
    else if (key === 'Enter' || key === 'ENTER') {
      console.log(attempt)
      if (letter < 5) {
        console.log('more letters plz')
      }
      else {
        if (board[attempt].join('') === word) {
          gameover = true;
          document.getElementById('answer').style.display = 'inline-block';
          console.log('gameover')
        }
        disable_letters(board[attempt])
        SetLetter(0);
        SetAttempt(attempt + 1);
        console.log(attempt)
        if (attempt === 5) {
          gameover = true;
          document.getElementById('answer').style.display = 'inline-block';
          console.log('gameover')
          return;
        }
      }
    }

    else if (!isalpha(key)) {
      return
    }

    else {
      if (letter < 5) {
        board[attempt][letter] = key;
        SetLetter(letter + 1);
        return;
      }
    }
  }


  useEffect(function () {
    function listener(e) {
      HandleKey(e.key.toUpperCase());
    }

    document.addEventListener("keydown", listener);
    return function cleanup() {
      document.removeEventListener('keydown', listener);
    }
  })
  return (
    <AppContext.Provider value={{
      board,
      attempt,
      word,
      HandleKey,
      disabled_letters,
      gameover
    }}>
      <>
        <Board />
        <div id='answer_container'>
          <div id='answer'>{word}</div>
        </div>
        <Keyboard />
      </>
    </AppContext.Provider>
  );
}

export default App;
