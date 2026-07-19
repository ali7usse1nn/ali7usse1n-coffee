import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound"; 
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    /* 
      FIXED: Removed the invalid `hook={useHashLocation}` setup.
      Instead, we use Wouter's base prop pointing to your GitHub repository folder name. 
      This allows Wouter to understand URLs like /ali7usse1n-coffee/ natively without crashing!
    */
    <WouterRouter base="/ali7usse1n-coffee">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        
        {/* Final fallback wildcard route */}
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
