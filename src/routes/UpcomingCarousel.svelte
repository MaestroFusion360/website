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
    ariaLabel?: string;
  };

  let { items, locale, ariaLabel = 'Future projects carousel' }: Props = $props();

  function getProjectLocale(project: ProjectCard): ProjectLocale {
    return (project[locale] as ProjectLocale | undefined) ?? project.en ?? {};
  }
</script>

<Carousel items={items} class="upcoming-carousel" dotsClass="upcoming-dots" {ariaLabel}>
  {#snippet children(item: unknown, _index: number, active: boolean)}
    {@const project = item as ProjectCard}
    {@const projectLocale = getProjectLocale(project)}
    <Card variant="project" {active}>
      <h3>{projectLocale.title ?? ''}</h3>
      <p>{@html projectLocale.description ?? ''}</p>
      {#if projectLocale.features?.length}
        <ul class="features-list">
          {#each projectLocale.features as feature (feature)}
            <li>{@html feature}</li>
          {/each}
        </ul>
      {/if}
    </Card>
  {/snippet}
</Carousel>

