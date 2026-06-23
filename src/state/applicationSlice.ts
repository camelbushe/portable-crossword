import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";

interface Word {
    readonly uuid: string,
    content: string,
    question: string,
    position: {
        x: number,
        y: number,
        direction: "horizontal" | "vertical"
    }
}

const wordsEntityAdapter = createEntityAdapter({
    selectId: (word: Word) => word.uuid
})

export const applicationSlice = createSlice({
    name: "application",
    initialState: {
        language: "en" as Language,
        words: wordsEntityAdapter.getInitialState(),
    },
    reducers: {
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload
        },
        upsertWord: (state, action: PayloadAction<Word>) => {
            wordsEntityAdapter.upsertOne(state.words, action.payload)
        }
    }
})

export const { setLanguage, upsertWord } = applicationSlice.actions

