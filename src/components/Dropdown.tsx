/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, useState, type ReactElement } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

import ArrowUp from "./icons/ArrowUp";
import ArrowDown from "./icons/ArrowDown";
import Tick from "./icons/Tick";

import "../styles/components/dropdown.css"

interface DropdownValue<T> {
  title: string,
  value: T,
}

interface DropdownProps<T> {
  selected: number,
  values: Array<DropdownValue<T>>
  onSelect?: (value: DropdownValue<T>) => void
}

function DropdownComponent<T>(
  { selected, values, onSelect }: DropdownProps<T>
) {
  const [isBodyOpen, setIsBodyOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(selected);

  const dropdownRef = useOutsideClick(() => {
    setIsBodyOpen(false);
  })

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown_header" onClick={() =>
        setIsBodyOpen(!isBodyOpen)
      }
      >
        {values[selectedIndex].title}
        {isBodyOpen ?
          <ArrowUp /> :
          <ArrowDown />
        }
      </div>
      {
        isBodyOpen && (
          <ul className="dropdown_body">
            {values.map((value, index) => {
              const isSelected = index == selectedIndex;

              return (
                <li 
                  className={`dropdown_value ${isSelected ? "selected" : ""}`}
                  key={index} 
                  onClick={() => {
                    setIsBodyOpen(false);
                    setSelectedIndex(index);

                    if (onSelect) {
                      onSelect(values[selectedIndex])
                    }
                  }}
                >
                  {value.title}
                  {isSelected &&
                    <Tick />
                  }
                </li>
              )
            }
            )}
          </ul>)
      }
    </div>
  )
}

export default memo(DropdownComponent) as <T>(
  props: DropdownProps<T>
) => ReactElement