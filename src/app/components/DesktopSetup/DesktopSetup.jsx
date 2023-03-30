import BgPatternDesktop from '../../images/bg-pattern-desktop.svg';
import BoxPicture from '../../images/illustration-box-desktop.svg';
import WomanOnlineDesktop from '../../images/illustration-woman-online-desktop.svg';

export default function DesktopSetup() {
	return (
		<div className="illustration-holder">
			<div className="hidden-content">
				<div className="bg-pattern-desktop">
					<img src={BgPatternDesktop} alt="Bg pattern" />
				</div>
				<div className="illustration-woman-online-desktop">
					<img src={WomanOnlineDesktop} alt="Woman at a desk" />
				</div>
			</div>
			<div className="illustration-box-desktop">
				<img src={BoxPicture} alt="Box picture" />
			</div>
		</div>
	);
}
