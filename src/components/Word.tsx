/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";

import TextInput from "./TextInput";
import Textarea from "./Textarea";

import "../styles/components/word.css"
import Trash from "./icons/Trash";

interface WordProps {
  word: string,
  clue: string,
  onDelete?: () => void
}

const Word = memo(({ word, clue, onDelete }: WordProps) => {
  return (
    <li className="word">
      <div className="word_top-elements">
        <TextInput className="word_word-input" color="on-secondary"
          defaultValue={word} />
        <button className="word_delete" onClick={onDelete}>
          <Trash />
        </button>
      </div>
      <Textarea className="word_clue-input" color="on-secondary" 
        defaultValue={clue} />
    </li>
  )
})

export default Word