const TextHeading = ({ firstlineText, secondLineText }) => {
	return (
		<h3 className="uppercase text-blue-800">
			<span className="text-sm">{firstlineText}</span>
			<span className="block text-4xl">{secondLineText}</span>
		</h3>
	);
};

export default TextHeading;
