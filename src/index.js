
	import { render } from 'react-dom'
	import Example from './example'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend';

// changes happen at line 7

	function App() {
		return (
			<div className="App">
				<DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
