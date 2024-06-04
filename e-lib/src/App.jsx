import Footer from './Footer';
import StickyNavbar from './Header';
import Card from './Card';
import { ReactTyped} from 'react-typed';
import Container from './Container';
import About from './About';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="relative z-10 w-full rounded-3xl bg-[#e5e8eb]">
        <StickyNavbar />
      </div>
      <Container />
      <div className="container mx-auto mt-96 text-center pt-4 pb-40">
        <ReactTyped
          className="md:text-5xl sm:text-4xl text-base font-bold font-noto-serif text-[#0D141C]"
          strings={['Top Rated Books']}
          typeSpeed={40}
          backSpeed={90}
          loop
        />
        <div className="p-4 border-2 border-gray-100 bg-gray-100 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="about" className="section"><About></About></div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
