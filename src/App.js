import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './stylesheets/style.css';
import Dashboard from './components/Dashboard';
import mainStyles from './mainstyles/App.module.scss';
const App = () => {
	return (
		<Provider store={store}>
			<div className={mainStyles.app__container}>
				<Dashboard />
			</div>
		</Provider>
	);
};

export default App;
