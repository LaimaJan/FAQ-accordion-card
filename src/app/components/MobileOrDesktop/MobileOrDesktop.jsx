import MobileSetup from '../MobileSetup/MobileSetup';
import DesktopSetup from '../DesktopSetup/DesktopSetup';
import useViewport from '../ViewPort/ViewPort';

export default function MyComponent() {
	const { width } = useViewport();
	const breakpoint = 376;

	return width < breakpoint ? <MobileSetup /> : <DesktopSetup />;
}
