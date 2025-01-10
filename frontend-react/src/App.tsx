import logo from '../public/images/logo.png'
import bg1Img from '../public/images/bg1-without-car.jpg'
import bg2Img from '../public/images/bg2.jpg'
import './App.css'
import { Scene3D } from './components/Scene3D'
import { AiOutlineFacebook, AiOutlineUser } from 'react-icons/ai'
import { CiCalendarDate } from 'react-icons/ci'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { GoZap } from 'react-icons/go'
import { FiPhone, FiUsers } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'


const cars = [
	{ id: 1, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car1.png" },
	{ id: 2, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car2.png" },
	{ id: 3, name: 'Mustang', year: 2015, velocity: "180 Km/h", energy: "9/10", people: "8/10", img: "./images/car3.png" },
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
				<img src={bg1Img} alt="car" />
				<span>MUSTANG</span>
				{/* <Scene3D /> */}
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EBEFF2" fill-opacity="1" d="M0,96L120,128C240,160,480,224,720,229.3C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
			</section>

			{/* Seção de lista de carros */}
			<section id='cars'>
				{cars.map(car => (
					<div key={car.id} className='card-car animate-view'>
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
				))}
			</section>

			<section id='about'>
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

			<section id='contact'>
				<h1>Contato</h1>
				<p>Entre em contato conosco através de nossos canais de atendimento:</p>
				<div className='cards-contact'>
					<div className='card-contact'>
						<FiPhone />
						<div>
							<h2>Telefone</h2>
							<p>(11) 9999-9999</p>
						</div>
					</div>
					<div className='card-contact'>
						<FaWhatsapp />
						<div>
							<h2>Whatsapp</h2>
							<p>(11) 9999-9999</p>
						</div>
					</div>
					<div className='card-contact'>
						<FaInstagram />
						<div>
							<h2>Instagram</h2>
							<p>@mustang</p>
						</div>
					</div>
					<div className='card-contact'>
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
