import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes/Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
