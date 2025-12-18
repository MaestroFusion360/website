<!-- src/routes/Technologies.svelte -->
<script lang="ts">
  import Badge from '$lib/Badge.svelte';
</script>

<section id="technologies">
  <h2 data-lang="tech-title">Technologies</h2>
  <div class="content-block">
    <h3 data-lang="tech-stack">Main Stack:</h3>
    <ul class="my-6 flex list-none flex-wrap justify-center gap-5 p-0">
      <li>
        <Badge src="assets/fusion_icon.svg" alt="Fusion 360 API" title="Fusion 360 API" />
      </li>
      <li>
        <Badge src="assets/python_icon.svg" alt="Python" title="Python" />
      </li>
      <li>
        <Badge src="assets/svelte_icon.svg" alt="Svelte5" title="Svelte5" />
      </li>
      <li>
        <Badge src="assets/c_sharp_icon.svg" alt="C#" title="C#" />
      </li>
      <li>
        <Badge src="assets/nx_icon.png" alt="Siemens NX" title="Siemens NX" />
      </li>

      <li>
        <Badge src="assets/html_icon.svg" alt="HTML5" title="HTML5" />
      </li>
      <li>
        <Badge src="assets/css_icon.svg" alt="CSS3" title="CSS3" />
      </li>
      <li>
        <Badge src="assets/tailwind_icon.svg" alt="Tailwind4" title="Tailwind4" />
      </li>
      <li>
        <Badge src="assets/javascript_icon.svg" alt="JavaScript" title="JavaScript" />
      </li>
      <li>
        <Badge src="assets/typescript_icon.svg" alt="TypeScript" title="TypeScript" />
      </li>
      <li>
        <Badge src="assets/telegram_icon.svg" alt="aiogram" title="Aiogram" />
      </li>

      <li>
        <Badge src="assets/excel_icon.svg" alt="Excel VBA" title="Excel VBA" />
      </li>
      <li>
        <Badge src="assets/vscode_icon.svg" alt="VS Code" title="VS Code" />
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
