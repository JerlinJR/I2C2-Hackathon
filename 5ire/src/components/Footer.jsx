import React from 'react'
import '../Footer.css'
import Logo from '../assets/logo.png'
import Twitter from '../assets/twitter.png'
import Git from '../assets/github.png'
import Telegram from '../assets/telegram.png'
import Discord from '../assets/discord.png'


export default function Footer(){

    return(

		<>
			<div id='subscribe'>
			<h1>Join the Metaverse</h1>
			<h2>Subscribe to our Newsletter.</h2>
			<button className="bg-blue-500 text-white p-2 rounded-md font-bold my-2">Subscribe now</button>
			</div>
			<footer className="footer">    
				<div className="container">
					<div className="row">
				<div className="footer-col">

					<img src={Logo} />
						
						<div className="social-links">
						<div className="social-linkss">
							<h4>follow us</h4>
							<a href=""><img src={Twitter} /></a>
							<a href=""><img src={Git} /></a>
							<a href=""><img src={Telegram} /></a>
							<a href=""><img src={Discord} /></a>
						</div>
							</div>
						</div>
						<div className="footer-col">
							<h4>General</h4>
							<ul>
								<li><a href="#">about us</a></li>
								<li><a href="#">documentation</a></li>
								<li><a href="#">contact us</a></li>
								<li><a href="#">news & media</a></li>
							</ul>
						</div>
					<div className="footer-col">
							<h4>General</h4>
							<ul>
								<li><a href="#">blog</a></li>
								<li><a href="#">community</a></li>
								<li><a href="#">roadmap</a></li>
								<li><a href="#">brand kit</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>General</h4>
							<ul>
								<li><a href="#">research</a></li>
								<li><a href="#">become a validator</a></li>
								<li><a href="#">5hire ambassador program</a></li>
								<li><a href="#">sustainability</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>General</h4>
							<ul>
								<li><a href="#">privacy policy</a></li>
							</ul>
						</div>

					</div>
				<div className="rights">
					<h2>All Rights Reserved © 5rie 2023</h2>
				</div>
				</div>
			</footer>

		</>
    )
}

