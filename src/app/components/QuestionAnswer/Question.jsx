import Arrow from '../../images/icon-arrow-down.svg';

export default function Question({
	id,
	question,
	answer,
	svgToggle,
	answerToggle,
	handleClick,
	questionToggle,
}) {
	return (
		<div className="question-wrapper">
			<div className="question" id={id}>
				<h3 className={questionToggle}>{question}</h3>
				<button onClick={handleClick}>
					<img src={Arrow} alt="Arrow down" className={svgToggle} />
				</button>
			</div>
			<div className={answerToggle}>{answer}</div>
		</div>
	);
}
