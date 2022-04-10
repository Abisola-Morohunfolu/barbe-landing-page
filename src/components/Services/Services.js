import React from 'react';
import TextHeading from '../UI/TextHeading';

const Services = () => {
	return (
		<section className="px-4 py-8 md:px-20 sm:px-8 sm:py-10 md:py-20" id="services">
			<TextHeading firstlineText="Nos" secondLineText="Services" />
			<div className="flex flex-col items-center py-3 md:flex-row md:my-10 justify-between">
				<div className="uppercase rounded-md max-w-full w-full bg-blue-600 p-10 md:w-1/3 mx-2 my-2">
					<h6 className="text-white text-center">Copropriété &rsaquo;</h6>
				</div>
				<div className="uppercase rounded-md max-w-full w-full bg-amber-800 p-10 md:w-1/3 mx-2 my-2">
					<h6 className="text-white text-center">Planification Familiale&rsaquo;</h6>
				</div>
				<div className="uppercase rounded-md max-w-full w-full bg-red-900 p-10 md:w-1/3 mx-2 my-2">
					<h6 className="text-white text-center">Immobilier &rsaquo;</h6>
				</div>
			</div>
		</section>
	);
};

export default Services;
