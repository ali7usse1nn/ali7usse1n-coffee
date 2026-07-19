import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// FIXED: Adjusted paths to match your flat root file structure
import Home from "./Home";
import NotFound from "./NotFound"; 

function Router() {
  return (
    <WouterRouter base="/ali7usse1n-coffee">
      <Switch>
        {/* 
          Wouter interprets a completely empty string relative to the base 
          as the true home index, preventing fallback mismatches on clean URLs.
        */}
        <Route path="" component={Home} />
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
