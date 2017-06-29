# html-boilerplate by RemRyahirev

## Описание

Репозиторий-шаблон для вёрстки с использованием SASS и bower. Призван
помочь бысттро начать верстать любой проект в удобной среде с автообновлением
через browser-sync.

## Установка

### Общее

1. Нужно сделать fork текущего репозитория
1. Установить [Git-клиент](https://git-scm.com)
1. Установить [Node.js](https://nodejs.org)
1. Установить bower командой `npm i -g bower`
1. Установить [yarn](https://yarnpkg.com/en/docs/install)
командой `npm i -g yarn` или любым другим способом из руководства
1. Проверить установку командой `yarn --version`, иначе
проверить системную переменную `PATH`
1. Установить [WebStorm](https://www.jetbrains.com/webstorm/download)
1. В корневой папке выполнить `yarn`
1. В корневой папке выполнить `bower install`

### Запуск

1. В корневой папке выполнить `gulp`

## Принцип работы

### Структура папок

1. bower_components - сюда загружаются bower-пакеты, которые можно
использовать в проекте
1. scss - исходные файлы стилей в формате scss (для препроцессора SASS)
1. src - исходные файлы HTML-страниц
1. src/components - HTML-компоненты для страниц
1. / - сюда складываются готовые шаблоны (с подставленными компонентами)
1. css - собранные файлы стилей

### Основной процесс

После запуска порождается процесс, который следит за содержимым папок `/src`
и `/scss`. В случае обнаружения изменения в этих папках запускаются сборщики
страниц и стилей, происходит обновление папок `/` и `/css` соответственно.

При пересборке страниц происходит перезагрузка страницы в браузере, в то время
как при пересборке стилей файл стилей заменяется на странице прямо на лету.

## Disclaimer

За корявость написанного никакой ответственности нет. Продукт поставляется по
принципу as-is.