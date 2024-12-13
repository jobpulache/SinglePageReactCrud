import { Outlet } from "react-router-dom";
import Footer from "./subcomponents/Footer";
import Header from "./subcomponents/Header";

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}
