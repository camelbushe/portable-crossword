/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";

import CrosswordCanvas from "./CrosswordCanvas";
import Button from "./Button";
import Header from "./Header";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Word from "./Word";

import "../styles/reset.css"
import "../styles/fonts.css"
import "../styles/components/editor.css"

const Editor = memo(() => {
    return (
        <div className="editor">
            <Header />
            <main className="editor_workplace">
                <aside className="editor_side-panel"></aside>
                <section className="editor_crossword">
                    <CrosswordCanvas />
                </section>
                <aside className="editor_side-panel editor_words-panel">
                    <h3>Add word</h3>
                    <TextInput placeholder="Enter a word..." disabled={true} />
                    <Textarea placeholder="Enter a word clue" disabled={true} />
                    <Button variant="destructive" title="Reset" disabled={true} />
                    <h3>Words list</h3>
                    <li>
                        <Word word="Hello" clue="We usually say it when meet each other" />
                    </li>
                </aside>
            </main>
        </div>
    )
})

export default Editor