const ArticleCard = (props) => {
	return (
		<div className="bg-white my-4 max-w-full w-full rounded-sm p-4 md:min-w-min md:w-1/4 mx-1">
			<h6 className="font-bold text-base">{props.title}</h6>
			<div>
				<span className="text-xs mr-1">{props.date}</span>
				<span className="text-xs">
					&bull; <span className="underline">{props.category}</span>
				</span>
			</div>
			<p className="text-xs mt-2">{props.article}</p>
		</div>
	);
};

export default ArticleCard;
