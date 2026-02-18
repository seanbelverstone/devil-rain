import { React, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gigs from './pages/Gigs';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Merch from './pages/Merch';
import { ErrorFallback } from './components/ErrorBoundary';

const App = () => {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/gigs" element={<Gigs />} />
			<Route path="/videos" element={<Videos />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/merch" element={<Merch />} />
		</Routes>
	);
};

const Root = () => (
	<Suspense fallback={Home}>
		<BrowserRouter>
			<Navbar />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<App />
			</ErrorBoundary>
		</BrowserRouter>
	</Suspense>
);

export default Root;