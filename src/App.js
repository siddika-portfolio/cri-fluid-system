import './App.css';
import AwardSection from './component/AwardSection/AwardSection';
import FooterBottom from './component/FooterBottom/FooterBottom';
import FooterTop from './component/FooterTop/FooterTop';
import Header from './component/Header/Header';
import ServiceSection from './component/ServiceSection/ServiceSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <AwardSection/>
      <ServiceSection/>
      <FooterTop/>
      <FooterBottom/>
    </div>
  );
}

export default App;
