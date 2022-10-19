import logo from './logo.svg';
import './App.css';
import Main from './layout/Main';
import Home from './component/home/Home'
import StartPractice from './component/exam/StartPractice'
import Statistic from './component/statistic/Statistic'
import Blog from './component/blog/Blog'

import  { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/startpractice/:startpracticeId',
        loader: ({ params }) => fetch(` https://openapi.programming-hero.com/api/quiz/${params.startpracticeId}`),
        element: <StartPractice></StartPractice>

      },
      {
        path: '/statistic',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistic></Statistic>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }

    ]
  },
  {
    path: '*',
    element:
      <div className=' text-center m-5'>
       <h2 >404 error page</h2>
      </div>

    
  }

])
  
  return (
    <div className='container' >
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;


