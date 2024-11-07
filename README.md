RU:
Требования

Для запуска проекта вам потребуется:

Node.js и npm (Node Package Manager)

Установите их, если еще не сделали этого. Скачать Node.js.

Установка и запуск
1. Клонируйте репозиторий
bash
Копировать код
git clone https://github.com/ваш-репозиторий
cd ваш-репозиторий
2. Установите http-server
Если вы не хотите устанавливать http-server глобально, пропустите этот шаг — мы будем использовать npx, чтобы запускать http-server без глобальной установки.

Для глобальной установки http-server (опционально):
bash
Копировать код
npm install -g http-server
3. Запуск проекта
Запустите http-server, используя одну из следующих команд:

Через npx (рекомендуется, так как не требует глобальной установки):

bash
Копировать код
npx http-server -a 127.0.0.1 -p 8080


EN:
To launch my project, you need to:
Install node: https://nodejs.org/en
Open a terminal
Install the http server with the command: npm install -g http server 
Go to the project directory in the terminal
Write the command: npx http-server 127.0.0.1 -p 8080 to start the server

Or:

Open the project via VS Code and use the Live Server plugin to launch the project
