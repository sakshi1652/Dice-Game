import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score , setscore] = useState(0);
  const [selectedNum , setselectedNum] = useState();
  const [currentDice , setcurrentDice] = useState(1);
  const [error , seterror] = useState("");
  const [showRules , setshowRules] = useState(false);

  const generateRandomNum = (min , max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setscore(0);
  }

  const rollDice = () => {

    if(!selectedNum){
    seterror("You have not selected any number*");
    return;
    }

    const randomNum = generateRandomNum(1,7);

    setcurrentDice((prev) => randomNum);

    if(selectedNum === randomNum){
      setscore((prev) => prev + randomNum);
    }
    else{
      setscore((prev) => prev - 2);
    }

    setselectedNum(undefined);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector  error={error}  seterror={seterror}  selectedNum={selectedNum} setselectedNum={setselectedNum} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className='btns'>
        <OutlineButton onClick={resetScore} >Reset</OutlineButton>
        <Button onClick={() => setshowRules(prev => !prev)}> {showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
   padding-top: 70px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }`;
