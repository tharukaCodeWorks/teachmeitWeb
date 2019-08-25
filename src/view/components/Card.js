import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const card = () => {
	return (
		<Card>
			<Image src="/images/daniel.jpg" />
			<Card.Content>
				<Card.Header>Daniel</Card.Header>
				<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default card;
