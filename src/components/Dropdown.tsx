/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, useState, type ReactElement } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

import "../styles/dropdown.css"

interface DropdownValue<T> {
  title: string,
  value: T,
}

interface DropdownProps<T> {
  selected: number,
  values: Array<DropdownValue<T>>
  onSelect?: (value: DropdownValue<T>) => void
}

function DropdownComponent<T>({ selected, values, onSelect }: DropdownProps<T>) {
  const [isBodyOpen, setIsBodyOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[selected]);

  const dropdownRef = useOutsideClick(() => {
    setIsBodyOpen(false);
  })

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown_header" onClick={() =>
        setIsBodyOpen(!isBodyOpen)
      }
      >{selectedValue.title}</div>
      {
        isBodyOpen && (
          <ul className="dropdown_body">
            {values.map((value, index) =>
              <li className="dropdown_value" key={index} onClick={() => {
                setIsBodyOpen(false);
                setSelectedValue(values[index]);

                if (onSelect) {
                  onSelect(selectedValue)
                }
              }}
              >{value.title}</li>
            )}
          </ul>)
      }
    </div>
  )
}

export default memo(DropdownComponent) as <T>(
  props: DropdownProps<T>
) => ReactElement