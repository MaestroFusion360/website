<!-- src/routes/ProjectsCarousel.svelte -->
<script lang="ts">
  import { Card, Carousel } from '$lib';

  export type Locale = 'en' | 'ru';

  type ProjectLocale = {
    title?: string;
    description?: string;
    features?: readonly string[];
  };

  export type ProjectCard = {
    link?: string;
    youtubeId?: string;
    en?: ProjectLocale;
    ru?: ProjectLocale;
    [key: string]: unknown;
  };

  type Props = {
    items: readonly ProjectCard[];
    locale: Locale;
    videoMissing: string;
    ariaLabel?: string;
  };

  let { items, locale, videoMissing, ariaLabel = 'Active projects carousel' }: Props = $props();

  function getProjectLocale(project: ProjectCard): ProjectLocale {
    return (project[locale] as ProjectLocale | undefined) ?? project.en ?? {};
  }
</script>

<Carousel {items} {ariaLabel}>
  {#snippet children(item: unknown, _index: number, active: boolean)}
    {@const project = item as ProjectCard}
    {@const projectLocale = getProjectLocale(project)}
    <Card variant="project" {active} data-index={_index}>
      <div class="video-container">
        {#if project.youtubeId}
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={projectLocale.title ?? ''}
            allowfullscreen
            loading="lazy"
            tabindex="-1"
          ></iframe>
        {:else}
          <div class="video-placeholder">{videoMissing}</div>
        {/if}
      </div>
      <h3>
        {#if project.link}
          <!-- eslint-disable svelte/no-navigation-without-resolve -->
          <a
            href={project.link}
            target="_blank"
            class="project-link"
            style="position: relative; z-index: 10;"
            tabindex="-1"
          >
            {projectLocale.title ?? ''}
          </a>
          <!-- eslint-enable svelte/no-navigation-without-resolve -->
        {:else}
          {projectLocale.title ?? ''}
        {/if}
      </h3>
      <p>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html projectLocale.description ?? ''}
      </p>
      {#if projectLocale.features?.length}
        <ul class="features-list">
          {#each projectLocale.features as feature (feature)}
            <li>
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {@html feature}
            </li>
          {/each}
        </ul>
      {/if}
    </Card>
  {/snippet}
</Carousel>
