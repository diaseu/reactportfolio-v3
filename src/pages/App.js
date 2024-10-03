import "../css/App.css";
import "../css/output.css";
import Example from "../component/Example";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Bento from "../component/Bento";
import Footer from "../component/Footer";

function App() {
  return (
    <div className="App bg-background">
      <Navbar />
      <header className="App-header">
        <Example />
        {/* <Card /> */}
      </header>
      <Bento />
      <Footer />
    </div>
  );
}

export default App;
