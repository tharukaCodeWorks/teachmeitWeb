import React from 'react';
import { Container, Message } from 'semantic-ui-react';

const privacy = () => {
	return (
		<Container>
			<Message className="footer-privacy-statement" textAlign="center" size="mini">
				<a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a> <br /> <a href="#">Contact us</a>{' '}
				| <a href="#">About Us</a>
				<br />
				Copyright © 2019 Teachmeit.lk
			</Message>
		</Container>
	);
};
export default privacy;
