import React from 'react';
import "./index.css"
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg'

interface CloseButtonProps {
  handleClick: () => void;
}

const CloseButton = ({ handleClick }: CloseButtonProps) => {
  return (
    <button onClick={handleClick} className='close-button'>
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
