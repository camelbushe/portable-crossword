/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './state/store'
import Editor from './components/Editor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Editor />
    </Provider>
  </StrictMode>,
)
