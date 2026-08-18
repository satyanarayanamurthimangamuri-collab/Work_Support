import { useRouter } from "./hooks/useRouter";
import { RouterContext } from "./hooks/RouterContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WorkSupport from "./pages/WorkSupport";
import Training from "./pages/Training";
import WorkWithTeam from "./pages/WorkWithTeam";
import JoiningOurTeam from "./pages/JoiningOurTeam";
import Contact from "./pages/Contact";

function renderPage(path: string) {
  switch (path) {
    case "/":
      return <Home />;
    case "/work-support":
      return <WorkSupport />;
    case "/training":
      return <Training />;
    case "/work-with-team":
      return <WorkWithTeam />;
    case "/joining-our-team":
      return <JoiningOurTeam />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

export default function App() {
  const { path, navigate } = useRouter();

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      <div className="flex min-h-screen flex-col bg-bg text-navy">
        <Header />
        {renderPage(path)}
        <Footer />
      </div>
    </RouterContext.Provider>
  );
}
