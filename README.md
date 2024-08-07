Для работы с автотестами необходимо:
1. Установить Playwright - init playwright@latest
2. Установить allure 
    a. https://allurereport.org/docs/install-for-windows/
    b. https://allurereport.org/docs/playwright/
3. Запустить тесты, варианты запуска: 
Запуск происходит командой "npx playwright test" - запуск всех тестов на всех браузерах
Для простоты запуска были добавлены скрипты, которые запускаются командой "npm run имя сприпта": например "npm run test" запустит все имеющиеся тесты, "npm run e2e" запустит тесты, находящиеся в папке tests-e2e
Список доступных скриптов:
"test": "npx playwright test", 
    "add-funds": "npx playwright test tests-add-funds",
    "e2e": "npx playwright test tests-e2e",
    "navbar": "npx playwright test tests-navbar",
    "cart": "npx playwright test cart",
    "currency": "npx playwright test choose-currency",
    "localization": "npx playwright test choose-loc",
    "create-order": "npx playwright test createOrder",
    "dark-theme": "npx playwright test darkLightTheme",
    "earn-page": "npx playwright test Earn",
    "search-field": "npx playwright test main-search",
    "services": "npx playwright test Services",
    "payments": "npx playwright test tests-payments",
    "smmpanelka": "npx playwright test tests-prod-smmpanelka",
    "auth-reg": "npx playwright test autharization-registration",
    "orders": "npx playwright test orders",
    "smmpanelka-marketplace": "npx playwright test tests-smmpanelka-marketplace" 
4. Опционально можно использовать флаги
    a. --workers : Кол-во одновременно запускаемых тестов, пример: npx playwright test --workers 2
    b. --project=имя_браузера : если тесты необходимо запустить на конркетном бразуере, пример: npx playwright test --project=chromium
        i. Список доступных браузеров: chromium , firefox, webkit, iPhone 14 Pro Max, iPhone 11, Galaxy S9+, iPad Pro 11, iPad Mini
5. После завершения тестирования можно ввести команду для просмотра allure репорта - npx allure serve allure-results(можно использовать скрипт npm run allure-result)