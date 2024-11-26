import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "@/pages/landing/landing";
import { MainPage } from "@/pages/main/main";
import { RootLayout } from "@/components/common/RootLayout";
import { DevelopPage } from "@/pages/develop/develop";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          {/* landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* main page */}
          <Route path="/main" element={<MainPage />} />

          {/* develop page */}
          <Route path="/develop" element={<DevelopPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
