import './App.css';
import { Body, Head, MainContainer, WatchPage } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        children: [
            { path: '/', element: <MainContainer /> },
            { path: 'watch', element: <WatchPage /> },
        ],
        errorElement: <div>404 Not Found</div>,
    },
]);

function App() {
    return (
        <div className="p-4 bg-gray-100 h-screen">
            <Head />
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default App;
