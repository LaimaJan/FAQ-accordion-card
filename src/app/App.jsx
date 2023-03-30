import Question from './components/QuestionAnswer/Question';
import MobileOrDesktop from './components/MobileOrDesktop/MobileOrDesktop';
import './App.css';
import React, { useState } from 'react';

function App() {
	const questions = [
		{
			id: 1,
			question: 'How many team members I can invite?',
			answer:
				'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. ',
			isActive: false,
		},
		{
			id: 2,
			question: 'What is the maximum file upload?',
			answer:
				'Suspendisse ipsum elit. Curabitur et  ut ac leo. In sit amet orci et erat accumsan interdum.',
			isActive: false,
		},
		{
			id: 3,
			question: 'How do I reset my password?',
			answer:
				'Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
			isActive: false,
		},
		{
			id: 4,
			question: 'Can I Cancel my subscription?',
			answer:
				'Suspendisse ipsum elit condimentum et mauris. Curabitur et libero vel . In sit amet orci et erat accumsan interdum.',
			isActive: false,
		},
		{
			id: 5,
			question: 'Do you provide additional support?',
			answer:
				'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris ut ac leo. In sit amet orci et erat accumsan interdum.',
			isActive: false,
		},
	];

	const [isActive, setActive] = useState(questions);

	const handleClick = (id) => {
		setActive(
			isActive.map((item) =>
				item.id === id
					? { ...item, isActive: !item.isActive }
					: { ...item, isActive: false }
			)
		);
	};

	return (
		<div className="App">
			<div className="content-holder">
				<MobileOrDesktop />

				<div className="container">
					<h2 className="heading">FAQ</h2>

					<section className="faq">
						{isActive.map(({ id, question, answer, isActive }) => (
							<Question
								key={id}
								id={id}
								question={question}
								answer={answer}
								svgToggle={isActive ? 'active' : ''}
								answerToggle={isActive ? 'answer active' : 'answer'}
								handleClick={() => handleClick(id)}
								questionToggle={isActive ? 'question active' : ''}
							/>
						))}
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
