import NoMatch from "../404";
import AddToCard from "../AddToCard";
import Home from "../Home";
import Login from "../Login";
import More from "../More";
import Product from "../Product";
import SearchPage from "../SearchPage";
import Single from "../Single";
import TopNavbar from "../TopNavbar";
import Welcome from "../Welcome";
import Protected from "./Protected";

let AppRoutes = [
    {
        path: '/',
        element: <TopNavbar/>,
        children: [
            { index: true, element : <Home/> },
           {
            path:'/login',
            element : <Login/>
           },
           {
            path: '/product',
            element: <Product />,
           
           },
           {
            path: '/product/single',
            element: <Single/>
            },
           {
            path:'/addtocard',
            element:<AddToCard />
           },
           {
            path:'/search',
            element:<SearchPage />,
           },
           {
            path: '/search/single',
            element: <Single/>
        },
           {
            path: '/welcome/',
            element: <Protected Component={Welcome} />,
            children: [
                {
                    path: 'more',
                    element: <More/>
                }
            ]
           },
           {
            path: "*",
            element: <NoMatch />
           }
        ]
    }
]


export default AppRoutes;