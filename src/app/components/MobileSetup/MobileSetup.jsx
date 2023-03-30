import BgPatternMobile from '../../images/bg-pattern-mobile.svg';
import WomanOnlineMobile from '../../images/illustration-woman-online-mobile.svg';

export default function MobileSetup() {
	return (
		<div className="illustration-holder">
			<div className="hidden-content">
				<div className="bg-pattern-mobile">
					<img src={BgPatternMobile} alt="Bg pattern" />
				</div>
				<div className="illustration-woman-online-mobile">
					<img src={WomanOnlineMobile} alt="Woman at a desk" />
				</div>
			</div>
		</div>
	);
}
