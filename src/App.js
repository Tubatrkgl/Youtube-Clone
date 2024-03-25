import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Body from "./components/body/Body";
import Watch from "./components/watch/Watch";
import Feed from "./components/feed/Feed";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<Feed/>
      }
      ,
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
