import React from 'react';

type FooterProps = {
	name: string;
	link: string;
};

const Footer: React.FC<FooterProps> = ({ name, link }) => {
	return (
		<div className="footer">
			<p className="made-with-love">
				Made with{' '}
				<i className="heart" aria-label="love">
					&#10084;
				</i>{' '}
				by <a href={link}>{name}</a>
			</p>
		</div>
	);
};

export default Footer;
