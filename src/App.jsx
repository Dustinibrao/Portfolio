import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

function App() {
	return (
		<div className="App">
			<h1>
				<Intro />
				<About />
				<ProductList />
				<Contact />
			</h1>
		</div>
	);
}

export default App;
