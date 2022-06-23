import React from "react";
import { Redirect } from "react-router-dom";
// soda machine
import SodaMachine from "../pages/SodaMachine";
import PurchaseFizz from "../pages/SodaMachine/partials/PurchaseFizz";
import PurchasePop from "../pages/SodaMachine/partials/PurchasePop";
import PurchaseCola from "../pages/SodaMachine/partials/PurchaseCola";
import PurchaseMegaPop from "../pages/SodaMachine/partials/PurchaseMegaPop";
// Authentication related pages below
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
// Admin
import Products from "../pages/Admin/Products";
import Account from "../pages/Admin/Account";
import RestockFizz from "../pages/Admin/partials/RestockFizz";
import RestockPop from "../pages/Admin/partials/RestockPop";
import RestockCola from "../pages/Admin/partials/RestockCola";
import RestockMegaPop from "../pages/Admin/partials/RestockMegaPop";

const authProtectedRoutes = [
  { path: "/products", component: Products },
  { path: "/account", component: Account },
  { path: "/admin/restock-fizz", component: RestockFizz },
  { path: "/admin/restock-cola", component: RestockCola },
  { path: "/admin/restock-pop", component: RestockPop },
  { path: "/admin/restock-mega-pop", component: RestockMegaPop },
]

const publicRoutes = [
  { path: "/soda-machine", component: SodaMachine },
  { path: "/soda-machine/purchase-fizz", component: PurchaseFizz },
  { path: "/soda-machine/purchase-cola", component: PurchaseCola },
  { path: "/soda-machine/purchase-pop", component: PurchasePop },
  { path: "/soda-machine/purchase-mega-pop", component: PurchaseMegaPop },
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/soda-machine" /> },
]

export { publicRoutes, authProtectedRoutes }
