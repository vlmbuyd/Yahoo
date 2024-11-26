import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "@/pages/landing/landing";
import { MainPage } from "@/pages/main/main";
import { Layout } from "@/components/common/Layout";
import { DevelopPage } from "@/pages/develop/develop";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* main page */}
          <Route path="/main" element={<MainPage />} />

          {/* develop page */}
          <Route path="/develop" element={<DevelopPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
