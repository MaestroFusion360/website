<section id="technologies">
	<h2 data-lang="tech-title">Technologies</h2>
	<div class="content-block">
		<h3 data-lang="tech-stack">Main Stack:</h3>
		<ul class="badges-list">
			<li>
				<img
					src="assets/fusion_icon.svg"
					width="40"
					height="40"
					alt="Fusion 360 API"
					title="Fusion 360 API"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/python_icon.svg"
					width="40"
					height="40"
					alt="Python"
					title="Python"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/svelte_icon.svg"
					width="40"
					height="40"
					alt="Svelte5"
					title="Svelte5"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/c_sharp_icon.svg"
					width="40"
					height="40"
					alt="C#"
					title="C#"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/nx_icon.png"
					width="40"
					height="40"
					alt="Siemens NX"
					title="Siemens NX"
					loading="lazy"
				/>
			</li>

			<li>
				<img
					src="assets/html_icon.svg"
					width="40"
					height="40"
					alt="HTML5"
					title="HTML5"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/css_icon.svg"
					width="40"
					height="40"
					alt="CSS3"
					title="CSS3"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/tailwind_icon.svg"
					width="40"
					height="40"
					alt="Tailwind4"
					title="Tailwind4"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/javascript_icon.svg"
					width="40"
					height="40"
					alt="JavaScript"
					title="JavaScript"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/typescript_icon.svg"
					width="40"
					height="40"
					alt="TypeScript"
					title="TypeScript"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/telegram_icon.svg"
					width="40"
					height="40"
					alt="aiogram"
					title="Aiogram"
					loading="lazy"
				/>
			</li>

			<li>
				<img
					src="assets/excel_icon.svg"
					width="40"
					height="40"
					alt="Excel VBA"
					title="Excel VBA"
					loading="lazy"
				/>
			</li>
			<li>
				<img
					src="assets/vscode_icon.svg"
					width="40"
					height="40"
					alt="VS Code"
					title="VS Code"
					loading="lazy"
				/>
			</li>
		</ul>
		<h3 data-lang="tech-other">Other Tools & Skills:</h3>
		<ul class="skills-list">
			<li data-lang="skill-post"></li>
			<li data-lang="skill-workflows"></li>
			<li data-lang="skill-ui"></li>
			<li data-lang="skill-vba"></li>
			<li data-lang="skill-macros"></li>
			<li data-lang="skill-telegram"></li>
			<li data-lang="skill-web"></li>
		</ul>
	</div>
</section>

<style>
	.badges-list {
		display: flex;
		justify-content: center;
		gap: 1.25rem;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
	}

	.badges-list li {
		display: inline-flex;
		align-items: center;
	}

	.badges-list img {
		transition: transform var(--transition);
	}

	.badges-list img:hover {
		transform: scale(1.1);
	}

	.skills-list {
		padding-left: 0;
		margin-bottom: 1.5rem;
		list-style-type: none;
	}

	.skills-list li {
		margin-bottom: 0.8rem;
		position: relative;
		padding-left: 1.5rem;
		line-height: 1.6;
	}

	.skills-list li::before {
		content: '\25B8';
		position: absolute;
		left: 0;
		color: var(--primary-color);
		font-weight: bold;
	}
</style>
