import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from "./routes/MenuRoutes"

function App() {
	return (
		<div className="general--container">
			<Navbar />
			<MenuRoutes />
		</div>
	);
}

export default App;
