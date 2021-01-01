import Link from 'next/link';
import styles from './quiz.module.scss';

export default function Quiz() {
	return (
		<div className={styles.body}>
			<div class="container">
				<div id="question-container" class="hide">
					<div id="question">Question</div>
					<div id="answer-buttons" class="btn-grid">
						<button class="btn">Answer 1</button>
						<button class="btn">Answer 2</button>
						<button class="btn">Answer 3</button>
						<button class="btn">Answer 4</button>
					</div>
				</div>
				<div class="controls">
					<button id="start-btn" class="start-btn btn">
						Start
					</button>
					<button id="next-btn" class="next-btn btn hide">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
