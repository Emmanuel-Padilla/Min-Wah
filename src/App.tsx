import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { WokLayout } from "./wok/WokLayout";
import WokHome from "./wok/WokHome";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="wok-express" element={<WokLayout />}>
        <Route index element={<WokHome />} />
      </Route>
    </Routes>
  );
}
