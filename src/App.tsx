import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import AboutUs from "./routes/AboutUs";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import Motor from "./routes/services/Motor";
import Home from "./routes/services/Home";
import Medical from "./routes/services/Medical";
import Business from "./routes/services/Business";
import Agriculture from "./routes/services/Agriculture";
import Travel from "./routes/services/Travel";
import NotFound from "./routes/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    
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
    
  </QueryClientProvider>
);

export default App;
