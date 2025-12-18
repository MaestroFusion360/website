//src/routes/schema.ts

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'MaestroFusion360',
  url: 'https://maestrofusion360.github.io/website/',
  sameAs: ['https://www.youtube.com/@MaestroFusion360', 'https://t.me/MaestroFusion360'],
  jobTitle: 'CNC Software Engineer',
  description: 'Fusion 360 Developer specializing in G-code automation.',
  image: 'https://maestrofusion360.github.io/website/assets/icon-192.png'
};

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'MaestroFusion360 Projects',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'svelte-comp',
      url: 'https://github.com/MaestroFusion360/svelte-comp',
      description: 'Svelte 5 UI components library with TailwindCSS styling.'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Planner',
      url: 'https://github.com/MaestroFusion360/task_planning',
      description: 'Desktop planner with Gantt chart for manufacturing scheduling.'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Easy G-Code Plot',
      url: 'https://github.com/MaestroFusion360/easy_gcode_plot',
      description: 'G-code editor and 3D toolpath visualizer.'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'SmartPost',
      url: 'https://github.com/MaestroFusion360/SmartPost',
      description: 'Fusion 360 postprocessor helper for faster multi-tool outputs.'
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: '@postprocessors_bot',
      url: 'https://t.me/postprocessors_bot',
      description: 'Telegram bot for sharing CAM postprocessors.'
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'MoveOp',
      url: 'https://github.com/MaestroFusion360/MoveOp',
      description: 'Fusion 360 add-in to reorder imported CAM operations.'
    }
  ]
};

const personSchemaJson = JSON.stringify(personSchema);
const projectsSchemaJson = JSON.stringify(projectsSchema);
const jsonLdScriptOpen = '<scr' + 'ipt type="application/ld+json">';
const jsonLdScriptClose = '</scr' + 'ipt>';
export const personSchemaTag = jsonLdScriptOpen + personSchemaJson + jsonLdScriptClose;
export const projectsSchemaTag = jsonLdScriptOpen + projectsSchemaJson + jsonLdScriptClose;
