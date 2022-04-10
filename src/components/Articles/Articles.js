import ArticleCard from '../UI/ArticleCard';
import TextHeading from '../UI/TextHeading';

const Articles = () => {
	return (
		<section className="bg-slate-100 px-4 py-8 md:px-20 sm:px-8 sm:py-10 md:py-20" id="articles">
			<TextHeading firstlineText="Les" secondLineText="Articles" />
			<div className="flex flex-col sm:flex-col md:flex-row my-10 justify-between items-center">
				<ArticleCard
					title="Titre de l'article"
					date="18 Mar 2021"
					category="Immobilier"
					article="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem a eos, iste
                    reiciendis unde, amet ea, officia vero eveniet debitis..."
				/>
				<ArticleCard
					title="Titre de l'article"
					date="18 Mar 2021"
					category="Immobilier"
					article="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem a eos, iste
                    reiciendis unde, amet ea, officia vero eveniet debitis..."
				/>
				<ArticleCard
					title="Titre de l'article"
					date="18 Mar 2021"
					category="Immobilier"
					article="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem a eos, iste
                    reiciendis unde, amet ea, officia vero eveniet debitis..."
				/>
				<ArticleCard
					title="Titre de l'article"
					date="18 Mar 2021"
					category="Immobilier"
					article="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem a eos, iste
                    reiciendis unde, amet ea, officia vero eveniet debitis..."
				/>
			</div>
		</section>
	);
};

export default Articles;
