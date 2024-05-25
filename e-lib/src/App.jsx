import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#F7FAFC", minHeight: "100vh" }}>
      <Header></Header>
      <div className="container mt-4 pt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4">
            <Card />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
