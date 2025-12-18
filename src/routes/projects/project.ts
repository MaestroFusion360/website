export const projectsData = {
  active: [
    {
      link: 'https://github.com/MaestroFusion360/svelte-comp',
      youtubeId: '',
      en: {
        title: 'svelte-comp',
        description:
          'A compact, modular UI toolkit built on <strong>Svelte 5</strong> with styling powered by <strong>TailwindCSS</strong> and a clean layer of CSS variables. Components are predictable, lightweight, and self-contained - no global side effects',
        features: [
          '<strong>Svelte 5 Runes API</strong> ($state, $derived, $effect, $props)',
          '<strong>TailwindCSS v4</strong> + design tokens via CSS variables',
          '<strong>Built-in i18n</strong>: English, Russian, Spanish'
        ]
      },
      ru: {
        title: 'svelte-comp',
        description:
          'Компактная модульная библиотека UI-компонентов на <strong>Svelte 5</strong> со стилями на <strong>TailwindCSS</strong> и слоем CSS-переменных. Компоненты предсказуемые, легкие и самодостаточные - без глобальных сайд-эффектов',
        features: [
          '<strong>Svelte 5 Runes API</strong> ($state, $derived, $effect, $props)',
          '<strong>TailwindCSS v4</strong> + дизайн-токены через CSS-переменные',
          '<strong>Встроенная i18n</strong>: английский, русский, испанский'
        ]
      }
    },
    {
      link: 'https://github.com/MaestroFusion360/task_planning',
      youtubeId: '',
      en: {
        title: 'Planner',
        description:
          'Planner is a desktop application for <strong>manufacturing task management</strong> and <strong>production scheduling</strong>',
        features: [
          '<strong>Production planning</strong> and scheduling',
          '<strong>Interactive Gantt chart</strong> (Day / Week / Month view)',
          'Import/Export from <strong>CSV</strong> and <strong>Excel</strong>'
        ]
      },
      ru: {
        title: 'Planner',
        description:
          'Planner — настольное приложение для <strong>управления производственными задачами</strong> и <strong>планирования производства</strong>',
        features: [
          '<strong>Планирование</strong> и расписание производственных задач',
          '<strong>Интерактивная диаграмма Ганта</strong> (день / неделя / месяц)',
          'Импорт/Экспорт из <strong>CSV</strong> и <strong>Excel</strong>'
        ]
      }
    },
    {
      link: 'https://github.com/MaestroFusion360/easy_gcode_plot',
      youtubeId: '',
      en: {
        title: 'Easy G-Code Plot',
        description:
          'Easy G-Code Plot is a G-code editor and visualizer. It supports 3D rendering of toolpaths for <strong>3-axis milling</strong> and <strong>2-axis lathe</strong> machining with various modes',
        features: [
          '<strong>Program animation</strong> with playback speed control and display of current coordinates',
          '<strong>Syntax highlighting with line numbering</strong> (similar to Cimco Edit)',
          '<strong>G-code export</strong> and <strong>machining time calculation</strong>'
        ]
      },
      ru: {
        title: 'Easy G-Code Plot',
        description:
          'Easy G-Code Plot - редактор-визуализатор G-кода. Поддержка 3D прорисовки траекторий <strong>3х осевой фрезерной</strong> и <strong>2х осевой токарной</strong> обработки с различными режимами',
        features: [
          '<strong>Анимация</strong> программы с управлением скоростью воспроизведения и отображением текущих координат',
          '<strong>Подсветка синтаксиса c нумерацией строк</strong> (как в Cimco Edit)',
          '<strong>Экспорт G-кода</strong> и <strong>расчет времени обработки</strong>'
        ]
      }
    },
    {
      link: 'https://github.com/MaestroFusion360/SmartPost',
      youtubeId: 'IRA7O7wwCWM',
      en: {
        title: 'SmartPost',
        description:
          'A powerful tool that accelerates <strong>G-code generation</strong> and removes the <strong>tool change restriction</strong> in Fusion 360 Personal',
        features: [
          '<strong>Faster post-processing</strong> – reduce CAM processing time.',
          '<strong>No tool change limitations</strong> – unrestricted multi-tool operations.',
          '<strong>Improved workflow efficiency</strong> – streamlined G-code generation.'
        ]
      },
      ru: {
        title: 'SmartPost',
        description:
          'Мощный инструмент, который ускоряет <strong>генерацию УП</strong> и устраняет <strong>ограничение на смену инструмента</strong> в Fusion 360 Personal',
        features: [
          '<strong>Быстрый постпроцессинг</strong> – сокращение времени на настройку вывода УП.',
          '<strong>Нет ограничений на смену инструмента</strong> – неограниченные операции с несколькими инструментами.',
          '<strong>Улучшенная эффективность</strong> – упрощенная генерация УП.'
        ]
      }
    },
    {
      link: 'https://maestrofusion360.github.io/FormBuilder/',
      youtubeId: '',
      en: {
        title: 'FormBuilder',
        description:
          'FormBuilder is a visual HTML form editor built with Svelte and Vite, offering developers a lightweight, dependency-free tool for complete control over form design',
        features: [
          '<strong>Visual Component Tree</strong>: Intuitively add, remove, nest, and reorder form elements.',
          '<strong>Drag-and-Drop</strong>',
          "<strong>Project Serialization</strong>: Save, load, and share your form's complete structure as JSON."
        ]
      },
      ru: {
        title: 'FormBuilder',
        description:
          'FormBuilder — это визуальный редактор HTML-форм на Svelte и Vite, предоставляющий разработчикам лёгкий инструмент без зависимостей для полного контроля над дизайном форм',
        features: [
          '<strong>Визуальное дерево компонентов</strong>: Интуитивное добавление, удаление, вложение и изменение порядка элементов формы.',
          '<strong>Drag-and-Drop и управление с клавиатуры</strong>',
          '<strong>Сериализация проекта</strong>: Сохранение, загрузка и обмен полной структурой формы в формате JSON.'
        ]
      }
    },
    {
      link: 'https://t.me/postprocessors_bot',
      youtubeId: '',
      en: {
        title: '@postprocessors_bot',
        description:
          '<strong>Telegram bot</strong> for managing and distributing CAM postprocessors',
        features: [
          '<strong>Catalog for NX and Fusion 360</strong> (turning/milling)',
          '<strong>Download from private Telegram channel</strong>',
          '<strong>Category and metadata system</strong> (license, version)'
        ]
      },
      ru: {
        title: '@postprocessors_bot',
        description:
          '<strong>Телеграм-бот</strong> для управления и распространения CAM-постпроцессоров',
        features: [
          '<strong>Каталог для NX и Fusion 360</strong> (токарная/фрезерная обработка)',
          '<strong>Скачивание из закрытого Telegram канала</strong>',
          '<strong>Система категорий и метаданных </strong>(лицензия, версия)'
        ]
      }
    },
    {
      link: 'https://maestrofusion360.github.io/css-validator-pages/',
      youtubeId: '',
      en: {
        title: 'CSS validator',
        description:
          '<strong>CSS Validator</strong> is a lightweight, interactive tool built with Svelte 5. It features a live editor with instant preview, inline validation',
        features: [
          '<strong>Live Editor & Preview</strong>: Auto-resizing textarea and real-time rendering of a selected component.',
          '<strong>Inline CSS Validation</strong>: Real-time warnings and errors for property names and values.',
          '<strong>Syntax Highlighting & Copy</strong>: The CodeView component highlights CSS/HTML and enables one-click copying.'
        ]
      },
      ru: {
        title: 'CSS validator',
        description:
          '<strong>CSS Validator</strong> — это лёгкий интерактивный инструмент на Svelte 5. Он предлагает живой редактор с предпросмотром, встроенную валидацию',
        features: [
          '<strong>Живой редактор и предпросмотр</strong>: Автомасштабируемое поле ввода и мгновенный рендеринг выбранного компонента.',
          '<strong>Встроенная валидация CSS</strong>: Проверка имён и значений свойств с выводом предупреждений и ошибок.',
          '<strong>Подсветка синтаксиса и копирование</strong>: Компонент CodeView подсвечивает CSS/HTML код и позволяет копировать его.'
        ]
      }
    },
    {
      link: 'https://github.com/MaestroFusion360/DrillCalc',
      youtubeId: '',
      en: {
        title: 'DrillCalc',
        description:
          '<strong>Drilling Calculator</strong> is a fast G-code coordinate generator for circular and grid hole patterns, designed for CNC machinists and Fusion 360 users',
        features: [
          '<strong>Circular & Grid Array Calculation</strong>: Generate coordinates for PCD and grid layouts with start angle and direction control.',
          '<strong>Export-Ready G-Code Cycles</strong>: Directly export to standard canned cycles (G81, G82, G83) or XY coordinate lists.',
          '<strong>Accessible, Responsive UI</strong>: A clean interface with dark/light mode that works on any device.'
        ]
      },
      ru: {
        title: 'DrillCalc',
        description:
          '<strong>Drilling Calculator</strong> — это быстрый генератор координат G-кода для круговых и сеточных массивов отверстий, созданный для операторов ЧПУ и пользователей Fusion 360',
        features: [
          '<strong>Расчёт круговых и сеточных массивов</strong>: Генерация координат для окружностей и сеток с настройкой начального угла и направления.',
          '<strong>Экспорт циклов G-кода</strong>: Прямой экспорт в стандартные циклы (G81, G82, G83) или списки координат XY.',
          '<strong>Адаптивный и доступный интерфейс</strong>: Чистый дизайн с тёмной/светлой темой для всех устройств.'
        ]
      }
    },
    {
      link: 'https://github.com/MaestroFusion360/MoveOp',
      youtubeId: '6TczgiwyWbA',
      en: {
        title: 'MoveOp',
        description:
          '<strong>MoveOp</strong> solves blocking operation in Fusion 360 after Import CAM Data',
        features: [
          '<strong>Reordering within the same Setup</strong> (Fusion’s native restriction)',
          '<strong>No manual parameter editing required</strong>',
          '<strong>Full preservation of operation settings</strong>'
        ]
      },
      ru: {
        title: 'MoveOp',
        description:
          '<strong>MoveOp</strong> решает блокировку операций в Fusion 360 после Import CAM Data',
        features: [
          '<strong>Изменение порядка в пределах одной настройки</strong> (ограничение Fusion)',
          '<strong>Не требуется ручного редактирования параметров</strong>',
          '<strong>Полное сохранение настроек работы</strong>'
        ]
      }
    },
    {
      link: 'https://github.com/MaestroFusion360/QuickSelect',
      youtubeId: 'E2lyviuTwmQ',
      en: {
        title: 'QuickSelect',
        description:
          '<strong>QuickSelect</strong> is a Fusion 360 add-in that simplifies the <strong>selection of tangent faces</strong> on your 3D models. With one click, the tool automatically selects:',
        features: [
          '<strong>All faces tangent to your initial selection</strong>',
          '<strong>Connected faces with continuous curvature</strong>',
          '<strong>Complex face chains without manual picking</strong>'
        ]
      },
      ru: {
        title: 'QuickSelect',
        description:
          '<strong>QuickSelect</strong> - это надстройка Fusion 360, которая упрощает <strong>выбор касательных граней</strong> в 3D-моделях. Одним кликом выбираются:',
        features: [
          '<strong>Все грани, касающиеся вашей начальной выделенной грани</strong>',
          '<strong>Связанные грани с непрерывной кривизной</strong>',
          '<strong>Сложные цепочки граней без ручного выбора</strong>'
        ]
      }
    },
    {
      link: 'https://github.com/MaestroFusion360/CompareBodies',
      youtubeId: '',
      en: {
        title: 'CompareBodies',
        description:
          '<strong>Compare Bodies</strong> is a Fusion 360 add-in that allows you to compare two selected bodies directly within the design environment to <strong>detect any differences between them.</strong> After selecting two bodies, the tool calculates and compares:',
        features: [
          '<strong>Volume</strong>',
          '<strong>Surface area</strong>',
          '<strong>Geometry similarity</strong> (based on face and edge counts)'
        ]
      },
      ru: {
        title: 'CompareBodies',
        description:
          '<strong>Compare Bodies</strong> — это надстройка для Fusion 360, позволяющая сравнивать два выбранных тела прямо в среде проектирования <strong>для выявления различий между ними.</strong> После выбора двух тел инструмент вычисляет и сравнивает:',
        features: [
          '<strong>Объем</strong>',
          '<strong>Площадь поверхности</strong>',
          '<strong>Сходство геометрии</strong> (на основе количества граней и ребер)'
        ]
      }
    },
    {
      link: 'https://maestrofusion360.github.io/editor_json/',
      youtubeId: '',
      en: {
        title: 'editor_json',
        description:
          '<strong>editor_json</strong> is a Progressive Web App (PWA) for managing CNC post-processor JSON files (@postprocessors_bot)',
        features: [
          '<strong>Edit post processor parameters</strong>',
          '<strong>Save/load JSON files</strong>',
          '<strong>Search by name and description</strong>',
          '<strong>Responsive interface</strong>'
        ]
      },
      ru: {
        title: 'editor_json',
        description:
          '<strong>editor_json</strong> — это веб-приложение (PWA) для управления JSON-файлами постпроцессоров ЧПУ (@postprocessors_bot)',
        features: [
          '<strong>Редактировать параметры постпроцессора</strong>',
          '<strong>Сохранять и загружать JSON-файлы конфигурации</strong>',
          '<strong>Поиск по названию и описанию</strong>',
          '<strong>Адаптивный интерфейс</strong>'
        ]
      }
    }
  ],
  upcoming: [
    {
      link: '',
      youtubeId: '',
      en: {
        title: 'Automation',
        description:
          '<strong>Automation</strong> – is a add-in for Fusion 360 that automates the loading and adaptation of CAM data from templates, eliminating the need to manually create machining strategies. Its key feature is <strong>Import CAM Data</strong>, which allows linking ready-made toolpaths to a new model.',
        features: [
          '<strong>Smart templates</strong>, allowing work without the need to define geometry for machining creation',
          '<strong>Offline mode</strong> – loading templates and managing data without connecting to the Fusion 360 cloud',
          "<strong>WCS setup</strong> – automatic determination of the stock's zero point for correct machining alignment",
          '<strong>Automatic setup sheet generation</strong> – creation of files with machining parameters, tools, and saving model images from different angles',
          '<strong>Automatic NC program creation</strong> – generation of control programs using configured parameters',
          '<strong>Flexible post processor setup</strong> – selection of G-code formats, save folders, and output parameters'
        ]
      },
      ru: {
        title: 'Automation',
        description:
          '<strong>Automation</strong> – это модуль для Fusion 360, который автоматизирует загрузку и адаптацию CAM-данных из шаблонов, исключая необходимость вручную создавать стратегии обработки. Его ключевая функция – <strong>Import CAM Data</strong>, позволяющая привязывать готовые траектории к новой модели.',
        features: [
          '<strong>Умные шаблоны</strong>, позволяющие работать без необходимости задавать геометрию для создания обработки',
          '<strong>Офлайн-режим работы</strong> – загрузка шаблонов и управление данными без подключения к облаку Fusion 360',
          '<strong>Настройка WCS</strong> – автоматическое определение нулевой точки заготовки для корректной привязки обработки',
          '<strong>Автоматическая генерация карт наладки</strong> – создание файлов с параметрами обработки, инструментами и сохранение изображений модели с разных ракурсов',
          '<strong>Автоматическое создание NC-программ</strong> – генерация управляющих программ с использованием настроенных параметров',
          '<strong>Гибкая настройка постпроцессоров</strong> – выбор форматов G-кода, папок сохранения и параметров вывода'
        ]
      }
    }
  ]
};
