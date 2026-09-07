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
import Tabs from "./Tabs";
import Accordion from "./Accordion";

const CommonWordTab = () => {
    return (
        <div className="editor_words-panel">
            <h3>Add word</h3>
            <TextInput placeholder="Enter a word..." disabled={true} />
            <Textarea placeholder="Enter a word clue" disabled={true} />
            <Button variant="destructive" title="Reset" disabled={true} />
            <h3>Words list</h3>
            <ul className="editor_words">
                <Word word="Hello" clue="We usually say it when meet each other" />
                <Word word="Legend" clue="Somebody legendary" />
                <Word word="React" clue="JavaScript library" />
            </ul>
        </div>
    )
}

const ClassicWordTab = () => {
    return (
        <div>Classic</div>
    )
}

const ThemeTab = () => {
    const titles = ["Палитра", "Темы"]

    return (
        <Accordion initialOpenElementIds={[
            "colors",
            "typography",
            "geometry",
            "custom"
        ]}>
           <Accordion.Element title="Colors" id="colors">There are colors here</Accordion.Element>
           <Accordion.Element title="Typography" id="typography">There are typography here</Accordion.Element>
           <Accordion.Element title="Geometry" id="geometry">There are geometry here</Accordion.Element>
           <Accordion.Element title="Custom" id="custom">There are custom variables here</Accordion.Element>
        </Accordion>
    )
}

const ElementsTab = () => {
    return (
        <div>Elements</div>
    )
}

const Editor = memo(() => {
    const wordTabsTitles = ["Общее", "Классический"]
    const designTabsTitles = ["Переменные", "Элементы"]

    return (
        <div className="editor">
            <Header />
            <main className="editor_workplace">
                <aside className="editor_side-panel">
                    <Tabs titles={designTabsTitles} >
                        <ThemeTab />
                        <ElementsTab />
                    </Tabs>
                </aside>
                <section className="editor_crossword">
                    <CrosswordCanvas />
                </section>
                <aside className="editor_side-panel">
                    <Tabs titles={wordTabsTitles} >
                        <CommonWordTab />
                        <ClassicWordTab />
                    </Tabs>
                </aside>
            </main>
        </div>
    )
})

export default Editor