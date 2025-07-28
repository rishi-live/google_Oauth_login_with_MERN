import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Dashboard() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const data = localStorage.getItem("user-info");
		const userData = JSON.parse(data);
		setUser(userData);
	}, []);

	const handleLogout = () => {
    localStorage.getItem("user-info");
  };

	return (
		<>
			<div>Rishi's Dashboard</div>
			<h1>Welcome {userInfo?.name}</h1>
			<h3>{userInfo?.email}</h3>
			<img src={userInfo?.image} alt={userInfo?.name} />
			<button onClick={handleLogout}>Logout</button>
		</>
	);
}

export default Dashboard;
