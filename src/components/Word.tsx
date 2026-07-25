/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";

import "../styles/components/word.css"
import TextInput from "./TextInput";
import Textarea from "./Textarea";

interface WordProps {
  word: string,
  clue: string
}

const Word = memo(({ word, clue }: WordProps) => {
  return (
    <ul className="word">
      <div>
        <TextInput value={word} />
        <button>Delete</button>
      </div>
      <Textarea value={clue} />
    </ul>
  )
})

export default Word