import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./views/ErrorPage.tsx";
import PlayerComponents from './views/PlayerComponent.tsx';
import App from './App.tsx';
import HomePage from './views/HomePage.tsx';
import ClubsComponents from './views/ClubComponent.tsx';
import ClubDetailComponent from './views/ClubDetailComponent.tsx';
import { Provider } from 'react-redux';
import { store } from './stores/store.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "players",
        element: <PlayerComponents />,
      },
      {
        path: "clubs",
        element: <ClubsComponents />,
        children: [
          {
            path: "view/:clubId",
            element: <ClubDetailComponent />,
          }
        ]
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
