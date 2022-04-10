import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Services />
			<Articles />
			<Footer />
		</>
	);
}

export default App;
