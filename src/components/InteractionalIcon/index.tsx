import React from 'react';
import "./index.css"

import { ReactComponent as Hide } from 
'../../assets/icons/hide.svg'
import { ReactComponent as Show } from '../../assets/icons/show.svg'
import { ReactComponent as Info } from '../../assets/icons/info.svg'
import { ReactComponent as Drag } from '../../assets/icons/drag-dots.svg'
import { ReactComponent as Down } from '../../assets/icons/arrow-down.svg'
import Tooltip from '../Tooltip';

type InteractionalIconType = "drag" | "show" | "hide" | "info" | "down" | "up"

interface InteractionalIconProps {
  type: InteractionalIconType;
  handleClick: () => void;
  dragProps?: any;
}

const Up = () => {
  return <Down className='up' />
}

const iconType = {
  drag: { icon: <Drag />, text: "Sort layer" },
  show: { icon: <Show />, text: "Show layer" },
  hide: { icon: <Hide />, text: "Hide layer" },
  info: { icon: <Info />, text: "Layer Info" },
  down: { icon: <Down />, text: "Collapse" },
  up: { icon: <Up />, text: "Expand" },
}

const InteractionalIcon = ({ type, handleClick, dragProps }: InteractionalIconProps) => {
  const draggableProps = type === "drag" ? dragProps : undefined
  return (
    <Tooltip
      overlay={iconType[type]?.text}
    >
      <div className='interactional-button' {...draggableProps} >
        <button className='interactional-button_btn' onClick={handleClick} >
          <span role="img" className='interactional-button_icon'>
            {iconType[type]?.icon}
          </span>
        </button>
      </div>
    </Tooltip>
  );
};

export default InteractionalIcon;
