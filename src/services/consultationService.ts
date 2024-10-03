export function submitConsultation(questions: string[], answers: string[]): void {
	const asObject: { [key: string]: string } = {};
	questions.forEach((q, index) => (asObject[q] = answers[index]));
	console.log("Consultation submitted");
	console.log(asObject);
}
