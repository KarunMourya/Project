import React, { useState } from 'react'
import style from './Accordian.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Accordian = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={style.accordionitem}>
      <div className={style.accordioncontent}>
        <h4 onClick={() => setExpanded(!expanded)} className={style.questions}>
          {question}
        </h4>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {expanded && <div className={style.accordionanswer}>{answer}</div>}
    </div>
  )
}

export default Accordian;