import type { ServiceInfo } from "../components/KestrelServiceTemplate";
import type { Language, PageKey } from "./localizedSeo";

type Lang = Exclude<Language,"lv">;
export type TranslatedService = Extract<PageKey,"web"|"commerce"|"seo"|"uiux"|"hosting">;
export const localizedServiceSlugs: Record<Lang,Record<string,TranslatedService>> = {
  en:{"web-development":"web","ecommerce":"commerce","seo":"seo","ui-ux":"uiux","website-maintenance":"hosting"},
  ru:{"razrabotka-sajtov":"web","internet-magazin":"commerce","seo":"seo","ui-ux":"uiux","obsluzhivanie-sajtov":"hosting"}
};
export const serviceTranslations: Record<Lang,Record<TranslatedService,ServiceInfo>> = {
  en:{
    web:{
      title:"Web development",
      intro:"We create clear business websites where visitors can understand your offer, find what matters and get in touch.",
      audience:[],
      offers:[
        {title:"Landing page",detail:"One page for one clear offer with a direct enquiry path.",price:"from €200"},
        {title:"Business website",detail:"Multiple services organised into an easy-to-navigate website.",price:"from €450"},
        {title:"Website improvements",detail:"Fix structure and usability issues on your existing website."}
      ],
      included:[
        {title:"Content structure",detail:"Information organised around customer needs."},
        {title:"Design",detail:"A visual approach adapted to your business."},
        {title:"Mobile layout",detail:"We check the site on desktop and mobile."},
        {title:"SEO essentials",detail:"Headings and metadata."},
        {title:"Contact options",detail:"A clear way for customers to reach you."},
        {title:"Launch",detail:"Final checks and publishing."}
      ],
      faq:[{question:"How is the final price calculated?",answer:"We agree on the scope and cost before development starts."}]
    },
    commerce:{
      title:"E-commerce websites",
      intro:"We plan an online store from product discovery to checkout, with an organised catalogue and a clear order flow.",
      audience:[],
      offers:[
        {title:"Product catalogue",detail:"Products grouped into clear categories."},
        {title:"Checkout journey",detail:"Cart and order confirmation planned around buyers."},
        {title:"Integrations",detail:"We assess compatible payment and shipping options."}
      ],
      included:[
        {title:"Requirements",detail:"Product and ordering requirements agreed."},
        {title:"Structure and design",detail:"Clear product navigation."},
        {title:"Integration plan",detail:"The required systems are identified."},
        {title:"Testing",detail:"We check the customer purchase journey."}
      ],
      faq:[{question:"Are payments and delivery included?",answer:"We evaluate integrations and agree on their scope and costs separately."}]
    },
    seo:{
      title:"SEO services",
      intro:"We inspect technical and content issues that may prevent search engines from understanding your website. We do not guarantee rankings.",
      audience:[],
      offers:[
        {title:"SEO audit",detail:"Find specific technical and content issues."},
        {title:"Technical SEO",detail:"Review indexing, metadata and site hierarchy."},
        {title:"Content optimisation",detail:"Match pages to services and search intent."}
      ],
      included:[
        {title:"Review",detail:"Establish the starting situation."},
        {title:"Priorities",detail:"Identify the most important fixes."},
        {title:"Agreed improvements",detail:"Implement the selected work."},
        {title:"Summary",detail:"Explain what has changed."}
      ],
      faq:[{question:"Do you guarantee a first-place Google ranking?",answer:"No. Improvements can remove barriers, but they cannot guarantee positions."}]
    },
    uiux:{
      title:"UI/UX design",
      intro:"We improve navigation, visual hierarchy and the order of actions so visitors can find information and use your website.",
      audience:[],
      offers:[
        {title:"Design audit",detail:"Identify concrete usability problems."},
        {title:"UX structure",detail:"Plan the sequence of pages and actions."},
        {title:"UI design",detail:"Create a consistent, usable interface."}
      ],
      included:[
        {title:"Issues",detail:"Record obstacles in the user journey."},
        {title:"Structure",detail:"Propose a clearer layout."},
        {title:"Design",detail:"Create an agreed visual structure."},
        {title:"Review",detail:"Check usability."}
      ],
      faq:[{question:"Can you improve just one part of a website?",answer:"Yes. We agree on the specific area to review and improve."}]
    },
    hosting:{
      title:"Website maintenance",
      intro:"We help set up hosting and agree on technical maintenance and updates after the website is launched.",
      audience:[],
      offers:[
        {title:"Hosting",detail:"Set up the agreed hosting environment."},
        {title:"Maintenance",detail:"Agree on monitoring and support responsibilities."},
        {title:"Updates",detail:"Carry out approved changes."}
      ],
      included:[
        {title:"Initial checks",detail:"Confirm technical requirements."},
        {title:"Deployment",detail:"Prepare the hosting environment."},
        {title:"Monitoring",detail:"According to the agreed plan."},
        {title:"Support",detail:"Work and response scope agreed in advance."}
      ],
      faq:[{question:"What is included in maintenance?",answer:"The exact services and response times depend on the agreed plan."}]
    }
  },
  ru:{
    web:{
      title:"Разработка сайтов",
      intro:"Создаём понятные сайты для бизнеса: посетитель быстро видит ваше предложение и знает, как связаться.",
      audience:[],
      offers:[
        {title:"Лендинг",detail:"Одна страница для одного предложения и удобной заявки.",price:"от 200 €"},
        {title:"Сайт компании",detail:"Несколько услуг в продуманной структуре.",price:"от 450 €"},
        {title:"Улучшение сайта",detail:"Исправляем проблемы структуры и удобства."}
      ],
      included:[
        {title:"Структура контента",detail:"Информация в порядке, понятном клиентам."},
        {title:"Дизайн",detail:"Внешний вид под задачи бизнеса."},
        {title:"Мобильная версия",detail:"Проверка на компьютере и телефоне."},
        {title:"Основы SEO",detail:"Заголовки и метаданные."},
        {title:"Связь с клиентами",detail:"Понятный способ связаться."},
        {title:"Запуск",detail:"Проверка и публикация."}
      ],
      faq:[{question:"Как рассчитывается стоимость?",answer:"Объём работ и цену согласуем до начала разработки."}]
    },
    commerce:{
      title:"Интернет-магазины",
      intro:"Продумываем интернет-магазин от выбора товаров до оформления заказа: удобный каталог и понятный путь покупки.",
      audience:[],
      offers:[
        {title:"Каталог товаров",detail:"Группируем товары по понятным категориям."},
        {title:"Оформление заказа",detail:"Продумываем корзину и заказ."},
        {title:"Интеграции",detail:"Оцениваем оплату и доставку."}
      ],
      included:[
        {title:"Требования",detail:"Уточняем товары и процесс заказа."},
        {title:"Структура и дизайн",detail:"Удобный поиск товаров."},
        {title:"План интеграций",detail:"Определяем необходимые системы."},
        {title:"Тестирование",detail:"Проверяем путь покупателя."}
      ],
      faq:[{question:"Оплата и доставка уже включены?",answer:"Варианты интеграций, объём и стоимость согласуем отдельно."}]
    },
    seo:{
      title:"SEO для сайтов",
      intro:"Проверяем технические и контентные проблемы, которые мешают поисковым системам понимать сайт. Не гарантируем позиции.",
      audience:[],
      offers:[
        {title:"SEO-аудит",detail:"Находим технические и контентные проблемы."},
        {title:"Техническое SEO",detail:"Проверяем индексацию, метаданные и структуру."},
        {title:"Оптимизация контента",detail:"Адаптируем страницы под услуги и поисковые запросы."}
      ],
      included:[
        {title:"Анализ",detail:"Определяем исходную ситуацию."},
        {title:"Приоритеты",detail:"Выделяем важные исправления."},
        {title:"Исправления",detail:"Выполняем согласованные работы."},
        {title:"Отчёт",detail:"Объясняем, что изменилось."}
      ],
      faq:[{question:"Гарантируете первое место в Google?",answer:"Нет. Исправления не гарантируют конкретные позиции."}]
    },
    uiux:{
      title:"UI/UX-дизайн",
      intro:"Улучшаем навигацию, визуальную иерархию и последовательность действий, чтобы сайтом было проще пользоваться.",
      audience:[],
      offers:[
        {title:"Аудит дизайна",detail:"Находим конкретные проблемы удобства."},
        {title:"UX-структура",detail:"Продумываем страницы и действия."},
        {title:"UI-дизайн",detail:"Создаём последовательный и удобный интерфейс."}
      ],
      included:[
        {title:"Проблемы",detail:"Фиксируем трудности посетителей."},
        {title:"Структура",detail:"Предлагаем понятную организацию."},
        {title:"Дизайн",detail:"Создаём согласованный макет."},
        {title:"Проверка",detail:"Оцениваем удобство."}
      ],
      faq:[{question:"Можно улучшить только одну часть сайта?",answer:"Да. Заранее согласуем нужный участок и объём работ."}]
    },
    hosting:{
      title:"Обслуживание сайтов",
      intro:"Помогаем с размещением сайта и согласованным техническим обслуживанием после запуска.",
      audience:[],
      offers:[
        {title:"Хостинг",detail:"Размещаем сайт в согласованной инфраструктуре."},
        {title:"Обслуживание",detail:"Определяем объём мониторинга и поддержки."},
        {title:"Обновления",detail:"Выполняем заранее согласованные изменения."}
      ],
      included:[
        {title:"Проверка",detail:"Уточняем технические требования."},
        {title:"Размещение",detail:"Подготавливаем рабочую среду."},
        {title:"Мониторинг",detail:"В соответствии с выбранным планом."},
        {title:"Поддержка",detail:"Согласованные работы и время реакции."}
      ],
      faq:[{question:"Что входит в обслуживание?",answer:"Состав услуг и время реакции зависят от согласованного плана."}]
    }
  }
};
