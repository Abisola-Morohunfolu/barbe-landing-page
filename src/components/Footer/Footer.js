import Logo from '../../assests/logo.png';

const Footer = () => {
	return (
		<footer className="flex flex-col items-center lg:flex-row lg:items-start sm:px-4 md:px-20 py-10">
			<a href="/" class="flex items-center lg:mr-auto text-center justify-center">
				<img src={Logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
				<span class="self-center text-xs md:text-xl font-semibold whitespace-nowrap uppercase">
					Barbe & Cimon Notaires
				</span>
			</a>
			<div className="md:mr-20">
				<ul class="flex flex-col">
					<li>
						<a
							href="#home"
							class="block py-2 px-2 text-black rounded uppercase"
							aria-current="page"
						>
							À Propos
						</a>
					</li>
					<li>
						<a
							href="#services"
							class="block py-2 px-2 text-black rounded uppercase"
							aria-current="page"
						>
							Nos Services
						</a>
					</li>
					<li>
						<a
							href="#articles"
							class="block py-2 px-2 text-black rounded uppercase"
							aria-current="page"
						>
							Articles
						</a>
					</li>
					<li>
						<a
							href="#articles"
							class="block py-2 px-2 text-black rounded uppercase"
							aria-current="page"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className="uppercase">
				<h6 className="py-2 font-bold">Bureau</h6>
				<p className="mb-2 text-sm">
					101 Boulevard Saint
					<br />
					Joseph O, Montréal, QC
					<br />
					H2T 2P7
				</p>
				<h6 className="font-bold">Nous Suivre</h6>
			</div>
		</footer>
	);
};

export default Footer;
