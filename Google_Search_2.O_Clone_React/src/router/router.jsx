import {createBrowserRouter} from 'react-router-dom'
import SearchResults from '../componets/SearchResults'
import Home from '../pages/Home'
import ErrorRoute from './ErrorRoute'

export const router =  createBrowserRouter([
    {path:"/", element:<Home/>},
    {path:"/:query/:startIndex", element:<SearchResults/>},
    {path:"*", element: <ErrorRoute/>}
])
