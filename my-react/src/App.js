import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles/reset.css";
import "./styles/main.css";
import RootLayout from './components/Layout/RootLayout';
import MainPage from "./pages/MainPage";
import SafeTextPage from './pages/SafeTextPage';
import ShelterInfoPage from './pages/ShelterInfoPage'
import EscapeTipPage from './pages/EscapeTipPage'
import LiveChatPage from './pages/LiveChatPage'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>,
    children: [
      {path: '/', element: <MainPage/>},
      {path: '/safeText', element: <SafeTextPage/>},
      {path: '/shelterInfo', element: <ShelterInfoPage/>},
      {path: '/escapeTip', element: <EscapeTipPage/>},
      {path: '/liveChat', element: <LiveChatPage/>},
    ]
  }
])

export default function App() {
  return <RouterProvider router={router}/>
}
