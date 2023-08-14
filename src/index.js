import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/* Roboto Font */
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

/* React Router */
import router from './routes/root'
import { RouterProvider } from 'react-router-dom'

/* Redux Toolkit */
import { store } from './store/store'
import { Provider } from 'react-redux'

/* Firebase */
import './firebase'

/*  */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
