import "./defaults/reset/reset.scss";
import "./defaults/global/global.scss";
import Footer from "./components/Footer";
import Router from "./router";

const App = () => {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
};

export default App;
