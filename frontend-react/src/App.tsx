import logo from '../public/images/logo.png'
import bg1Img from '../public/images/bg1_cleanup.png';
import mustangImg from '../public/images/mustang.png'
import bg2Img from '../public/images/bg2.jpg'
import './App.css'

import { AiOutlineFacebook, AiOutlineUser } from 'react-icons/ai'
import { CiCalendarDate } from 'react-icons/ci'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { GoZap } from 'react-icons/go'
import { FiPhone, FiUsers } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const cars = [
	{ id: 1, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car1.png" },
	{ id: 2, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car2.png" },
	{ id: 3, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car3.png" },
	{ id: 4, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car2.png" },
	{ id: 5, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car1.png" },
	{ id: 6, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car3.png" },
	{ id: 7, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car2.png" },
]

function App() {

	return (<>
		<div className='casa'>

			{/* Cabeçalho */}
			<header id='header'>
				<img id='logo' src={logo} alt="logo" width={70} />
				<nav>
					<a href="#initial">Home</a>
					<a href="#cars">Tabela</a>
					<a href="#about">Sobre</a>
					<a href="#contact">Fale Conosco</a>
				</nav>
				<button className='btn-login'>
					Entrar
					<AiOutlineUser />
				</button>
			</header>

			{/* Seção inicial */}
			<section id='initial'>
				<img className='bg-tunnel' src={bg1Img} alt="car" />
				<span>MUSTANG</span>
				<img className='mustang-image' src={mustangImg} alt="mustang" />
			</section>

			{/* Seção de lista de carros */}
			<section id='cars'>
				<Swiper
					className='animate-view'
					modules={[Navigation, Autoplay]}
					navigation
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1200: { slidesPerView: 3 },
						1800: { slidesPerView: 4 },
						2200: { slidesPerView: 5 },
					}}
					loop={true} // Ativa o loop circular
					autoplay={{
						delay: 3000, // 3 segundos entre os slides
						disableOnInteraction: false, // Continua mesmo ao interagir
					}}
					style={{ height: '100%', padding: '0 2rem' }}
				>
					{cars.map((car) => (
						<SwiperSlide key={car.id}>
							<div className='card-car animate-view'>
								<img src={car.img} alt="car" />
								<h1>{car.name}</h1>
								<p>
									<CiCalendarDate />
									<span>{car.year}</span>
								</p>
								<p>
									<IoSpeedometerOutline />
									<span>{car.velocity}</span>
								</p>
								<p>
									<GoZap />
									<span>{car.energy}</span>
								</p>
								<p>
									<FiUsers />
									<span>{car.people}</span>
								</p>

								<button>
									Ver Carro
								</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			{/* Seção de sobre */}
			<section id='about' className='animate-view'>
				<div className='bg-gradient'>
					<img src={bg2Img} alt='bg2 car' />
				</div>
				<article>
					<h1>Mustang</h1>
					<p>
						O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
					</p>
					<button>Ver Carros</button>
				</article>
			</section>

			{/* Seção de contato */}
			<section id='contact'>
				<h1>Contato</h1>
				<p>Entre em contato conosco através de nossos canais de atendimento:</p>
				<div className='cards-contact '>
					<div className='card-contact animate-view'>
						<FiPhone />
						<div>
							<h2>Telefone</h2>
							<p>(11) 9999-9999</p>
						</div>
					</div>
					<div className='card-contact animate-view'>
						<FaWhatsapp />
						<div>
							<h2>Whatsapp</h2>
							<p>(11) 9999-9999</p>
						</div>
					</div>
					<div className='card-contact animate-view'>
						<FaInstagram />
						<div>
							<h2>Instagram</h2>
							<p>@mustang</p>
						</div>
					</div>
					<div className='card-contact animate-view'>
						<AiOutlineFacebook />
						<div>
							<h2>Facebook</h2>
							<p>Mustang</p>
						</div>
					</div>
				</div>

			</section>
		</div>
	</>)
}

export default App
