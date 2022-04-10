import Pen from '../../assests/pen.png';
import Houses from '../../assests/bg-houses.png';
import classes from './Header.module.css';

const Header = () => {
	return (
		<>
			<header className={`pl-20 py-10 flex sm:flex-col md:flex-row items-center ${classes.Header}`}>
				<div className="mr-auto">
					<h1 className="uppercase text-red-800">
						<span className="">Nous valorisons la</span>
						<span className="block text-5xl leading-10">
							Clarté <span>&rsaquo;</span>
						</span>
					</h1>
					<p className="my-5 w-4/6 text-sm font-normal">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem a eos, iste
						reiciendis unde, amet ea, officia vero eveniet debitis praesentium. Quisquam accusamus
						harum veniam atque deleniti. Illo, nemo.
					</p>
					<button className="bg-transparent border border-red-800 py-2 px-10 rounded-sm hover:text-white hover:bg-rose-800">
						En savior plus
					</button>
				</div>
				<div>
					<img src={Pen} alt="Pen" />
				</div>
			</header>
			<div className="w-full">
				<img src={Houses} alt="houses" className="max-w-full object-cover" />
			</div>
		</>
	);
};

export default Header;
