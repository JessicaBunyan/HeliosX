import React from "react";
import "./App.css";
import { Consultation } from "./components/Consultation";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const questions = [
	"Are you currently taking any medication for heart disease such as Beta Blockers, Statins, Nitrates or ACE inhibitors?",
	"Are you under the age of 55?",
	"Is there a history of diabetes in your family?",
	"Do you have a pacemaker?",
	"Have you stayed overnight in a hospital in the last 12 months?",
];

function App() {
	return (
		<div className="App">
			<Header />
			<Consultation questions={questions} />
			<Footer />
		</div>
	);
}

export default App;
