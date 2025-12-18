<!-- src/routes/Technologies.svelte -->
<script lang="ts">
  import { getContext } from 'svelte';
  import Badge from '$lib/Badge.svelte';
  import { TEXTS, type Locale } from '../../lang';

  const lang = getContext<{ value: Locale }>('lang');
  const t = $derived(TEXTS[lang.value]);
</script>

<section id="technologies">
  <h2 data-lang="tech-title">{t['tech-title']}</h2>
  <div class="content-block">
    <h3 data-lang="tech-stack">{t['tech-stack']}</h3>
    <ul class="my-6 flex list-none flex-wrap justify-center gap-5 p-0">
      <li>
        <Badge
          src="assets/fusion_icon.svg"
          alt="Fusion 360 API"
          title="Fusion 360 API"
          href="https://www.autodesk.com/products/fusion-360/overview"
        />
      </li>

      <li>
        <Badge
          src="assets/python_icon.svg"
          alt="Python"
          title="Python"
          href="https://www.python.org/"
        />
      </li>

      <li>
        <Badge
          src="assets/svelte_icon.svg"
          alt="Svelte5"
          title="Svelte5"
          href="https://svelte.dev/"
        />
      </li>

      <li>
        <Badge
          src="assets/c_sharp_icon.svg"
          alt="C#"
          title="C#"
          href="https://learn.microsoft.com/en-us/dotnet/csharp/"
        />
      </li>

      <li>
        <Badge
          src="assets/nx_icon.png"
          alt="Siemens NX"
          title="Siemens NX"
          href="https://www.plm.automation.siemens.com/global/en/products/nx/"
        />
      </li>

      <li>
        <Badge
          src="assets/html_icon.svg"
          alt="HTML5"
          title="HTML5"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
      </li>

      <li>
        <Badge
          src="assets/css_icon.svg"
          alt="CSS3"
          title="CSS3"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
      </li>

      <li>
        <Badge
          src="assets/tailwind_icon.svg"
          alt="Tailwind CSS"
          title="Tailwind CSS"
          href="https://tailwindcss.com/"
        />
      </li>

      <li>
        <Badge
          src="assets/javascript_icon.svg"
          alt="JavaScript"
          title="JavaScript"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
      </li>

      <li>
        <Badge
          src="assets/typescript_icon.svg"
          alt="TypeScript"
          title="TypeScript"
          href="https://www.typescriptlang.org/"
        />
      </li>

      <li>
        <Badge
          src="assets/telegram_icon.svg"
          alt="Aiogram"
          title="Aiogram"
          href="https://docs.aiogram.dev/"
        />
      </li>

      <li>
        <Badge
          src="assets/excel_icon.svg"
          alt="Excel VBA"
          title="Excel VBA"
          href="https://learn.microsoft.com/en-us/office/vba/api/overview/excel"
        />
      </li>

      <li>
        <Badge
          src="assets/vscode_icon.svg"
          alt="VS Code"
          title="VS Code"
          href="https://code.visualstudio.com/"
        />
      </li>
    </ul>

    <h3 data-lang="tech-other">{t['tech-other']}</h3>
    <ul class="skills-list">
      <li data-lang="skill-post">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html t['skill-post']}
      </li>
      <li data-lang="skill-workflows">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html t['skill-workflows']}
      </li>
      <li data-lang="skill-ui">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html t['skill-ui']}
      </li>
      <li data-lang="skill-vba">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html t['skill-vba']}
      </li>
      <li data-lang="skill-macros">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html t['skill-macros']}
      </li>
      <li data-lang="skill-telegram">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html t['skill-telegram']}
      </li>
      <li data-lang="skill-web">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html t['skill-web']}
      </li>
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
