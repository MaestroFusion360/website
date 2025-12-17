<header>
	<h1 data-lang="title">Hi there, I'm MaestroFusion360</h1>
	<nav class="navbar">
		<a href="#about" data-lang="about-title">About</a>
		<a href="#technologies" data-lang="tech-title">Technologies</a>
		<a href="#projects" data-lang="projects-title">Projects</a>
		<a href="#upcoming" data-lang="upcoming-title">Future Projects</a>
		<a href="#contact" data-lang="contact-title">Contact</a>
	</nav>

	<div class="social-links">
		<a href="https://www.youtube.com/@MaestroFusion360?sub_confirmation=1">
			<img src="https://img.shields.io/badge/Subscribe-YouTube-red?logo=youtube" alt="YouTube" />
		</a>
		<a href="https://t.me/+v0HwgVBIg8AyNTcy">
			<img src="https://img.shields.io/badge/Join-Telegram-blue?logo=telegram" alt="Telegram" />
		</a>
	</div>
</header>

<style>
	header {
		position: relative;
		background: linear-gradient(115deg, var(--primary-color), var(--secondary-color));
		color: var(--white);
		padding: 4rem 1rem 3rem;
		text-align: center;
		width: 100%;
		box-shadow: var(--shadow-sm);
		overflow: hidden;
	}

	header::after {
		content: '';
		position: absolute;
		inset: -40% -20%;
		background: radial-gradient(circle at top, rgba(255, 255, 255, 0.28), transparent 60%);
		z-index: 0;
		pointer-events: none;
	}

	header > * {
		position: relative;
		z-index: 1;
	}

	.social-links {
		position: absolute;
		top: 20px;
		right: 20px;
		display: flex;
		gap: 10px;
		z-index: 10;
	}

	.social-links img {
		transition: transform var(--transition);
	}

	.social-links img:hover {
		transform: scale(1.08);
	}

	.navbar {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.navbar a {
		color: var(--white);
		text-decoration: none;
		font-size: 1.05rem;
		font-weight: 500;
		padding: 0.45rem 0.9rem;
		border-radius: 999px;
		opacity: 0.95;
		transition: background-color var(--transition), transform var(--transition), opacity var(--transition);
	}

	.navbar a:hover,
	.navbar a:focus-visible {
		background: rgba(255, 255, 255, 0.14);
		opacity: 1;
		transform: translateY(-1px);
	}

	.navbar a:focus-visible {
		outline: var(--focus-outline);
		outline-offset: 3px;
		border-radius: 999px;
	}

	@media (max-width: 768px) {
		header {
			padding: 3.25rem 1rem 2.5rem;
		}

		.social-links {
			top: 10px;
			right: 10px;
		}

		.social-links img {
			height: 24px;
		}
	}

	@media (max-width: 640px) {
		header {
			padding: 2.75rem 1rem 2.25rem;
		}

		.navbar {
			gap: 0.6rem;
		}

		.navbar a {
			font-size: 0.95rem;
			padding: 0.38rem 0.8rem;
		}
	}

	@media (max-width: 480px) {
		.social-links {
			position: static;
			justify-content: center;
			margin: 10px 0;
		}

		.navbar {
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
	}
</style>
