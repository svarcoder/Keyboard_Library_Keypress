import "./App.css";
import Home from "./module/Home";
import { ActiveShortcutsProvider } from "./logic/shortcutsContext";

function App() {
	return (
		<ActiveShortcutsProvider>
			<div className='App'>
				<Home />
			</div>
		</ActiveShortcutsProvider>
	);
}

export default App;
