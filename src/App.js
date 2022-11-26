import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import './App.css';

import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import "/node_modules/primeflex/primeflex.css"

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Whatdo from "./components/whatdo";
import Porfolio from "./components/porfolio";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-column w-full" >
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Sidebar />
        <Home />
        <About />
        <Whatdo />
        <Porfolio />
        <Resume />
        <Contact />
        <Footer />

      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
