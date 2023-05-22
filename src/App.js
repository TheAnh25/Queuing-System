
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster duration="500" position="top-center" />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
