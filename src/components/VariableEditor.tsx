/**
 * Copyright (C) 2026 camelbushe 
 * (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import "../styles/components/variable-editor.css"
import Plus from "./icons/Plus"

interface Variable {
  identifier: string,
  value: string,
}

interface VariableEditorProps {
  variables: Array<Variable>,
  onAdd?: () => void
  onDelete?: (variable: Variable) => void
}

const VariableEditor = (
  { variables, onAdd, onDelete }: VariableEditorProps
) => {
  return (
    <div className="variable-editor">
      <ul className="variable-editor_list">
        {variables.map((variable) =>
          <li className="variable-editor_variable" key={variable.identifier}>
            <input className="variable-editor_identifier" type="text"
              defaultValue={variable.identifier} />
            <span>:</span>
            <input className="variable-editor_value" type="text"
              defaultValue={variable.value} />
            <span>;</span>
            <button className="variable-editor_delete"
              onClick={() => onDelete && onDelete(variable)}>
              <Plus  className="variable-editor_delete-icon"/>
            </button>
          </li>
        )}
      </ul>
      <button className="variable-editor_new-variable"
        onClick={onAdd}>
        <Plus />
        <span>Add variable</span>
      </button>
    </div>
  )
}


export default VariableEditor