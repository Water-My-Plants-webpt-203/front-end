import styled from "styled-components/macro";
//import { Icon, InlineIcon } from "@iconify/react";
////import emailIcon from "@iconify/icons-carbon/email";
import { Link } from "react-router-dom";

const Container = styled.div`
	display: flex;
	height: 100%;
`;

const Text = styled.span`
	color: #757575;
	height: 60px;
	display: grid;
	place-items: center;
`;

const Button = styled.div`
	width: 150px;
	height: 60px;
	background: #ffffff;
	box-shadow: 0px 4px 17px 7px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	color: #00c853;
	display: grid;
	place-items: center;
	margin-left: 20px;
	&&:hover {
		cursor: pointer;
	}
`;

const Input = styled.input`
	border: none;
	border-bottom: 1px solid #757575;
	background-color: transparent;
	width: 300px;
	height: 33px;
	margin: 20px;
	padding: 5px;
	font-size: 20px;

	&&:focus {
		outline: 1px solid #00c853;
		border: none;
	}
`;

export default function Login() {
	return (
		<>
			<Container>
				<div
					style={{
						backgroundColor: "#00C853",
						width: "40%",
					}}
				></div>
				{/*Login form*/}
				<div style={{ backgroundColor: "#FAFAFA", width: "60%" }}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-end",
								margin: "20px",
							}}
						>
							<Text>Don't have an account?</Text>
							<Button>
								<Link
									style={{
										textDecoration: "none",
										color: "#00c853",
									}}
									to="/signup"
								>
									Create Profile
								</Link>
							</Button>
						</div>
						<form
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								margin: "auto",
								marginTop: "160px",
							}}
						>
							<Text style={{ fontSize: "40px" }}>Login</Text>
							<label>
								<Input placeholder="Email" type="email"></Input>
							</label>
							<label>
								<Input
									placeholder="Password"
									type="password"
								></Input>
							</label>
							<Button style={{ margin: "auto" }}>Login</Button>
							<Text>Forgot password?</Text>
						</form>
					</div>
				</div>
			</Container>
		</>
	);
}
