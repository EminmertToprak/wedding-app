import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';
import React from 'react';

const flowers = [
	{
		className: 'top-left-flower-form',
		src: flowerTopLeft,
		alt: 'flower_top_left',
	},
	{
		className: 'top-right-flower-form',
		src: flowerTopRight,
		alt: 'flower_top_right',
	},
	{
		className: 'bottom-left-flower-form',
		src: flowerBottomLeft,
		alt: 'flower_bottom_left',
	},
	{
		className: 'bottom-right-flower-form',
		src: flowerBottomRight,
		alt: 'flower_bottom_right',
	},
];

const renderFlowers = (pageName: string) => {
	let flowerClasses = {
		form: [
			'top-left-flower-form',
			'top-right-flower-form',
			'bottom-left-flower-form',
			'bottom-right-flower-form',
		],
		homepage: [
			'top-left-flower-homepage',
			'top-right-flower-homepage',
			'bottom-left-flower-homepage',
			'bottom-right-flower-homepage',
		],
		location: [
			'top-left-flower-location',
			'top-right-flower-location',
			'bottom-left-flower-location',
			'bottom-right-flower-location',
		],
		contact: [
			'top-left-flower-contact',
			'top-right-flower-contact',
			'bottom-left-flower-contact',
			'bottom-right-flower-contact',
		],
		faq: [
			'top-left-flower-faq',
			'top-right-flower-faq',
			'bottom-left-flower-faq',
			'bottom-right-flower-faq',
		],
	};

	return flowers.map((flower, index) => {
		let specificFlowerClasses = `flower ${
			flowerClasses[pageName]
				? flowerClasses[pageName][index % flowerClasses[pageName].length]
				: ''
		} ${pageName}-flower ${flower.className}`;

		return (
			<img
				key={index}
				className={specificFlowerClasses}
				src={flower.src}
				alt={flower.alt}
			/>
		);
	});
};

export default renderFlowers;
