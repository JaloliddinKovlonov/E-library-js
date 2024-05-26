import Footer from "./Footer";
import StickyNavbar from "./Header";
import Card from "./Card";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="relative z-10 w-full rounded-3xl bg-[#e5e8eb]">
        <StickyNavbar></StickyNavbar>
      </div>
      <div className="container mt-4 pt-4">
        <h3 className=" pb-0">Top rated books</h3>
        <div className="p-4 border-2 border-gray-100 bg-gray-100 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
