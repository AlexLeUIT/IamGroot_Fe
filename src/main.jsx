import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './routes/Homepage.jsx';
import Write from './routes/Write.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import Scanner from './routes/Scanner.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'
import {ToastContainer} from 'react-toastify';
const queryClient = new QueryClient()
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    element:<MainLayout />,
    children: [
      {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "posts",
    element: <PostListPage />,
  },
  {
    path: ":slug",
    element: <SinglePostPage />,
  },
  {
    path: "write",
    element: <Write />,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "scanner",
    element: <Scanner/>,
  }
    ]}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right"/>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
)
