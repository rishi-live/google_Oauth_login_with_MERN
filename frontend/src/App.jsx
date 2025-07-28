import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleLogin from "./components/GoogleLogin";
import RefrshHandler from "./components/RefreshHandler";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Move this OUTSIDE the App function!
const GoogleAuthWrapper = () => (
	<GoogleOAuthProvider clientId="xxx_client_id_xxx">
		<GoogleLogin />
	</GoogleOAuthProvider>
);

function App() {
	const [count, setCount] = useState(0);
	const [isAuthenticate, setIsAuthenticate] = useState(false);

	const privateRoute = ({ element }) => {
		return isAuthenticate ? element : <Navigate to="/login" />;
	};
	return (
		<BrowserRouter>
		<RefrshHandler />
			<Routes>
				<Route path="/login" element={<GoogleAuthWrapper />} />
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/dashboard" element={<privateRoute element={<Dashboard />} />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
