import Home from "./components/Home";
import Login from "./components/Login";
import Planet from "./components/Planet";
import Search from "./components/Search";

const routes = [
    { path: '/login', component: Login, isPrivate: false },
    { path: '/search', component: Search, isPrivate: true },
    { path: '/planets/:id', component: Planet, isPrivate: true },
    { path: '/', component: Home, isPrivate: true }
]

export default routes;
