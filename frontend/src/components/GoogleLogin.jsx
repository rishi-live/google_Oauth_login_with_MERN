import React from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"
function GoogleLogin() {

	const navigate = useNavigate();
	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const obj = {authResult};
				localStorage.setItem('user-info',JSON.stringify(obj));
				navigate("/dashboard")
			}
		} catch (error) {
			console.log("Error in google code", error);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code"
	  });

	return <button onClick={() => googleLogin()}>Login with Google</button>;
}

export default GoogleLogin;
