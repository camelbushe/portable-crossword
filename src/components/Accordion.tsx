/**
 * Copyright (C) 2026 camelbushe 
 * (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { createContext, useContext, useState, type ReactNode } from "react";
import Arrow from "./icons/Arrow";

import "../styles/components/accordion.css"


interface AccordionContextT {
  openElementIds: Array<string>,
  changeElementState: (index: string) => void
}

interface AccordionProps {
  children: Array<ReactNode>,
  initialOpenElementIds?: Array<string>
  allElementsOpened?: boolean
}

interface ElementProps {
  children: ReactNode,
  title: string,
  id: string
}

const AccordionContext = createContext<AccordionContextT | null>(null);

const Accordion = (
  { children, initialOpenElementIds = [] }: AccordionProps
) => {
  const [
    openElementIds,
    changeOpenElementIndices
  ] = useState(initialOpenElementIds)

  const changeElementState = (id: string) => {
    changeOpenElementIndices(ids =>
      ids.includes(id) ? ids.filter(item => item != id) : [...ids, id]
    )
  }

  return (
    <AccordionContext.Provider value={{
      openElementIds, changeElementState
    }}>
      <ul className="accordion">
        {children}
      </ul>
    </AccordionContext.Provider>
  )
}

Accordion.Element = ({ children, title, id }: ElementProps) => {
  const context = useContext(AccordionContext);
  const isElementOpen = context?.openElementIds.includes(id);

  return (
    <li className="accordion_element">
      <button 
        className="accordion_element-header" 
        aria-expanded={isElementOpen}
        onClick={() => context?.changeElementState(id)}
      >
        <Arrow className={`accordion_element-arrow 
          ${isElementOpen ? 
            "accordion_element-arrow--down" : 
            "accordion_element-arrow--right"}
          `} 
        />
        <span>{title}</span>
      </button>
      {isElementOpen && (
        <div className="accordion_element-body">
          {children}
        </div>
      )}
    </li>
  )
}

export default Accordion