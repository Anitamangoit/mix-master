import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HomeLayout,
  SinglePageError,
  About,
  Landing,
  Cocktail,
  NewSletter,
  Error,
} from "./Pages";
 
import { loader as landingLoader } from "./Pages/Landing";
import { loader as singleCocktailLoader } from "./Pages/Cocktail";
import { action as newsletterAction } from "./Pages/NewSletter";


const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 * 5 ,
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
       element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
     
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewSletter />,
        action: newsletterAction,
        errorElement:<SinglePageError/>
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
<QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>


  )
};
export default App;
