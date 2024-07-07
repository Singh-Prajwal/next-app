import React, { useState } from "react"
import styles from "../styles/Tooltip.module.css"
import styled from "styled-components"

interface TooltipProps {
  children: React.ReactNode
  tooltip: string
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltip_container}>
        <div className={styles.tooltip_text}>{tooltip}</div>
        <div className={styles.tooltip_text_bottom}></div>
      </div>
    </div>
  )
}

export default styled(Tooltip)`
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip:hover .tooltip_container {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease-in-out; /* Smooth transition for opacity */
  }

  .tooltip_container {
    position: absolute;
    bottom: calc(
      100% + 8px
    ); /* Position the tooltip below the parent element with a small gap */
    left: 50%;
    transform: translateX(-50%);
    background-color: #0070f3;
    color: white;
    padding: 8px;
    border-radius: 4px;
    width: max-content;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    z-index: 1; /* Ensure tooltip is above other content */
  }

  .tooltip:hover .tooltip_text_bottom {
    visibility: visible;
  }

  .tooltip_text_bottom {
    position: absolute;
    bottom: calc(
      100% - 4px
    ); /* Adjust position of triangle relative to tooltip text */
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #0070f3;
    visibility: hidden;
  }
`
