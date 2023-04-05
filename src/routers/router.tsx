import HomePage from "@/views/homepage/index";
import User from "@/views/user/user";
import Login from "@/views/login/login";
import Partner from "@/views/partner/partner";
let routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/partner",
    component: Partner,
  },
];

export default routes;
