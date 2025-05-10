import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Component/Login';
import { Home } from './Pages/Home/Home';
import EmailVerification from './Pages/emailverification';
import { SignUp } from './Pages/signup';
import { Tax } from './Pages/tax';
import Layout from './Layout/Layout';
import Footer from './Component/Footer';
import { Administration } from './Pages/administration';
import { Businessfinancial } from './Pages/businessfinancial';
import { Buynowpaylater } from './Pages/buynowpaylater';
import { Churchfinancial } from './Pages/churchfinancial';
import { Hotelfinancial } from './Pages/hotelfinancial';
import { Insurance } from './Pages/insurance';
import { Realestate } from './Pages/realestate';
import { Schoolandpayment } from './Pages/schoolandpayment';
import { Supermarket } from './Pages/supermarket';
import { Dashboard } from './Pages/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emailverification" element={<EmailVerification />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/administration" element={<Layout><Administration /><Footer /></Layout>} />
          <Route path="/businessfinancial" element={<Layout><Businessfinancial /><Footer /></Layout>} />
          <Route path="/buynowpaylater" element={<Layout><Buynowpaylater /><Footer /></Layout>} />
          <Route path="/churchfinancial" element={<Layout><Churchfinancial /><Footer /></Layout>} />
          <Route path="/hotelfinancial" element={<Layout><Hotelfinancial /><Footer /></Layout>} />
          <Route path="/insurance" element={<Layout><Insurance /><Footer /></Layout>} />
          <Route path="/realestate" element={<Layout><Realestate /><Footer /></Layout>} />
          <Route path="/schoolandpayment" element={<Layout><Schoolandpayment  /><Footer /></Layout>} />
          <Route path="/supermarket" element={<Layout><Supermarket /><Footer /></Layout>} />
          <Route path="/tax" element={<Layout><Tax /> <Footer /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

