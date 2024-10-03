import { Fragment, useCallback, useRef, useState } from "react";
import styles from "./Consultation.module.scss";
import { Message } from "../Message";
import { RadioInput } from "../RadioInput";
import { submitConsultation } from "../../services/consultationService";

export interface IConsultationProps {
	questions: string[];
}

export function Consultation({ questions }: IConsultationProps) {
	const [answers, setAnswers] = useState([] as string[]);

	const [disabled, setDisabled] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	const addAnswer = useCallback(
		(answer: string) => {
			const newAnswers = [...answers, answer];
			setAnswers(newAnswers);
			setDisabled(true);
			window.setTimeout(() => setDisabled(false), 800);
			if (newAnswers.length === questions.length) {
				submitConsultation(questions, newAnswers);
			}
		},
		[answers, setAnswers, questions],
	);

	const consultationComplete = answers.length === questions.length;

	return (
		<div className={styles.consultation}>
			<div ref={scrollRef} className={styles.conversation}>
				<div className={styles.conversationInner}>
					<Message
						message={
							"Welcome to your online consultation for Genovian Pear Allergy medication. We will ask you a few questions to check it is safe to prescribe this medication to you"
						}
					/>
					{questions.map((q, index) => {
						if (answers.length < index) {
							return null;
						}
						return (
							<Fragment key={index}>
								<Message key={`question-${index}`} message={q} />
								{answers[index] && <Message key={`answer-${index}`} message={answers[index]} variant="secondary" />}
							</Fragment>
						);
					})}
					{consultationComplete && (
						<Message
							message="Thank you for completing your consultation. We will be in touch once our pharmacist has reviewed your
						answers"
						/>
					)}
				</div>
			</div>
			<div className={styles.responseArea}>
				{!consultationComplete && <RadioInput key={answers.length} disabled={disabled} onSubmit={addAnswer} />}
			</div>
		</div>
	);
}
