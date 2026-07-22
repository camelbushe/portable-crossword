/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import Button from "./Button"
import Import from "./icons/Import"
import Export from "./icons/Export"

import "../styles/components/header.css"

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Portable Crossword</h1>
      </div>
      <div className="header_buttons">
        <Button className="header_button" title="Import" variant="secondary"
          icon={Import} onClick={() => {
            // Importing crossword here
          }}
        />
        <Button className="header_button" title="Expot" icon={Export}
          onClick={() => {
            // Exporting crossword here
          }} />
      </div>
    </header>
  )
}

export default Header