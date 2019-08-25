import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { Button, Responsive } from 'semantic-ui-react';

const getWidth = () => {
	const isSSR = typeof window === 'undefined';

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
	render() {
		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Carousel
					renderCenterLeftControls={({ previousSlide }) => (
						<Button
							style={{ marginLeft: '10px' }}
							onClick={previousSlide}
							circular
							size="tiny"
							color="green"
							icon="angle left"
						/>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<Button
							style={{ marginRight: '10px' }}
							onClick={nextSlide}
							circular
							size="tiny"
							color="green"
							icon="angle right"
						/>
					)}
					dragging={true}
					speed={200}
				>
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
				</Carousel>
			</Responsive>
		);
	}
}

class MobileContainer extends Component {
	render() {
		return (
			<Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
				<Carousel
					renderCenterLeftControls={({ previousSlide }) => (
						<Button
							style={{ marginLeft: '10px' }}
							onClick={previousSlide}
							circular
							size="tiny"
							color="green"
							icon="arrow left"
						/>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<Button
							style={{ marginRight: '10px' }}
							onClick={nextSlide}
							circular
							size="tiny"
							color="green"
							icon="arrow right"
						/>
					)}
					dragging={true}
					speed={200}
				>
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
					<div>Text Content</div>
				</Carousel>
			</Responsive>
		);
	}
}

const carousel = () => {
	return (
		<div>
			<DesktopContainer />
			<MobileContainer />
		</div>
	);
};

export default carousel;
