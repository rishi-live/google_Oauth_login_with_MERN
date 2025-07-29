const { oauth2client } = require("../utils/googleConfig");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");

const googleLogin = async (req, res) => {
	try {
        console.log("inside")
		const { code } = req.query;
		const googleResponse = await oauth2client.getToken(code);
		oauth2client.setCredentials(googleResponse.tokens);

		const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`);

		const { email, name, picture } = userRes.data;

		let user = await UserModel.findOne({ email });
		if (!user) {
			user = await UserModel.create({
				name,
				email,
				image: picture,
			});
		}

		const { _id } = user;
		const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_TIMEOUT,
		});
		return res.status(200).json({
			message: "SUCCESS",
			token,
			user,
		});
	} catch (error) {
        res.status(500).json({
            message : "Internal servcer Error"
        })
    }
};

module.exports = { googleLogin };
