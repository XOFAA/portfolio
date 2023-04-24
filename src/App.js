import { BrowserRouter, Route,Routes } from "react-router-dom";

import { AppThemeProvider } from "./context/AppThemeProvider";
import { Body } from "./pages/Body/Body";



function App() {
  return (

    <AppThemeProvider>

  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}/>
    
    </Routes>
    </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
