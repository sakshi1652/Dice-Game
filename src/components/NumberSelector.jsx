import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ seterror , error , selectedNum , setselectedNum }) => {

  const arrNumber = [1 , 2 , 3 , 4 , 5 , 6];
  
  const numberSelectorHandler = (value) => {
    setselectedNum(value);
    seterror("");
  }

  return (
    <NumSelector>
    <p className='error'>{error}</p>
        <div className='flex'>
            {arrNumber.map((value,i) => (
                <Box  isSelected={value===selectedNum}  key={i}  onClick={() => numberSelectorHandler(value)}>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumSelector>
  );
}

export default NumberSelector

const NumSelector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
        color: red;
        padding-bottom: 5px;
        font-weight: 500;
    }
    `;

const Box = styled.div`
    height: 72px;;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
    `;