import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Motor from "./pages/services/Motor";
import Home from "./pages/services/Home";
import Medical from "./pages/services/Medical";
import Business from "./pages/services/Business";
import Agriculture from "./pages/services/Agriculture";
import Travel from "./pages/services/Travel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/motor" element={<Motor />} />
        <Route path="/services/home" element={<Home />} />
        <Route path="/services/medical" element={<Medical />} />
        <Route path="/services/business" element={<Business />} />
        <Route path="/services/agriculture" element={<Agriculture />} />
        <Route path="/services/travel" element={<Travel />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
