"use client";
import { useState } from 'react';

export default function Page(){
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 8 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "Enda ipdi Panraaa?!!!",
      "With a cherry on top???",
      "What about a cheesecake?",
      "PLEASE AMMMU",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Rohan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Uyire needhanaaaaa????",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return(
    <div className='header'>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <br />
          <br />
          <h1>YAYYYYYYYYYYY!!!!!!! It's a Dateeee!!</h1>
        </>
      ) : (
        <>
          <img
            className='h-[200px]' 
            src="https://i.gifer.com/1ABW.gif"
          />
          <h1 className='v-text'>Will you be my Valentine</h1>
          <div className='buttons'>
            <button 
              style={{fontSize: yesButtonSize}}
              onClick={() => setYesPressed(true)}
            >
              YES
            </button>
            <button
              onClick={handleNoClick}
            >
              {noCount === 0 ? "NO" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

