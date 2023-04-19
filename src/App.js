import { BrowserRouter, Route,Routes } from "react-router-dom";
import { HomePrincipal } from "./pages/home/HomePrincipal";
import { AppThemeProvider } from "./context/AppThemeProvider";

function App() {
  return (

    <AppThemeProvider>

  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePrincipal/>}/>
    </Routes>
    </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
