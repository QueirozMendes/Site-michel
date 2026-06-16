import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Intro from "@/components/layout/Intro";

import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Projetos from "@/pages/Projetos";
import WellnessSpaces from "@/pages/WellnessSpaces";
import Parcerias from "@/pages/Parcerias";
import Midia from "@/pages/Midia";
import Contato from "@/pages/Contato";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/projetos" component={Projetos} />
      <Route path="/wellness-spaces" component={WellnessSpaces} />
      <Route path="/parcerias" component={Parcerias} />
      <Route path="/midia" component={Midia} />
      <Route path="/contato" component={Contato} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Intro />
        <div id="app-content">
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
