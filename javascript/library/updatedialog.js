const dialog_icons = {
    "ANIMATION": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" /></svg>`,
    "DEVELOP": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>`,
    "GITHUB": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`,
    "GLOBE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>`,
}

const dialog = {
    //Url куда будет выполняться запрос
    url: 'https://api.github.com/repos/key-stoker/key-stoker.github.io/releases',
    key: 'dialog-update',

    /**
     * Отобразить окно с обновлениями
     * @param {Event} e - событие после скрытия диалогового окна
     */
    show: async function (e = () => { }, response = undefined) {
        data = await this.load(response);
        if (data) {
            await this.structure(data);
            $('.frame-dialog').css('display', '');
            $('body').css('overflow-y', 'hidden');
            $('body').css('position', 'fixed');
            $('.dialog > .btn-submit >.submit').click(() => {
                $('.frame-dialog').css('display', 'none');
                $('body').css('overflow-y', '');
                $('body').css('position', '');
                e();
            });
        }
    },

    structure: function (data) {
        $('.dialog > .wraper > .title > .text').text(data.title);
        $('.dialog > .wraper > .title > .version > span').text(data.tag);

        for (let i = 0; i < data.content.length; i++) {
            const element = data.content[i];
            let content = `<div class="info-block-content ${i + 1 == 1 ? "first" : i + 1 == 2 ? "second" : "third"}">`;
            $('.dialog > .wraper').append(this.html.title(element.title, i + 1));
            for (let i = 0; i < element.block.length; i++) {
                const block = element.block[i];
                let info_content = "";
                for (let i = 0; i < block.content.length; i++) {
                    const update = block.content[i];
                    info_content += this.html.info_update(update);
                }
                content += this.html.info(block.title, block.icon, info_content);
            }
            content += `</div>`;
            $('.dialog > .wraper').append(content);
        }
    },

    /**
     * Загружает последние обновление с github
     * @returns {Array} - Массив данных
     */
    load: function (response) {
        return new Promise((resolve) => {
            //Выполняем запрос
            if (response) {
                init(response);
            } else {
                fetch(this.url).then(async (res) => {
                    //Преобразовуем в json
                    let data = await res.json();
                    init(data);
                });
            }
            async function init(data) {
                console.log(data);
                //Проверяем если это массив
                if (Array.isArray(data) && data.length > 0) {
                    const pages = [];
                    //Разбиваем текст на строки
                    const arr = data[0].body.split('\r\n');
                    //Страница для pages
                    let page = {};

                    //проходимся по строкам
                    for (let i = 0; i < arr.length; i++) {
                        const line = arr[i]; //Строка

                        //Если строка начинается на '- ' это основной блок
                        if (line.startsWith('- ')) {
                            //Если строка начанает на '- ' и страница имеет уже ключи то нужно создать новую страницу а ту сохранить в основную книгу
                            if (Object.keys(page).length > 0) {
                                //Сохраняем страницу в книгу
                                pages.push(page);
                                //Создаем новую страницу
                                page = {};
                            }

                            page.title = line.substring(2); // Заголовок основного блока
                            page.block = []; // Место для дополнительных блоков
                        }

                        //Если строка начинается на '> -' это дополнительный блок основного блока
                        if (line.startsWith('> -')) {
                            const parts = line.split("["); // Рабиваем строку на 2 части
                            //Заголовом вырезаем и убираем **
                            const title = parts[0].trim().substring(3).replace(/\*/g, '');;
                            //Достаем текст иконки
                            const icon = parts[1].substring(0, parts[1].length - 1);
                            //Добавляем в дополнительный блок страницы
                            page.block.push({ title, icon, content: [] });
                        }

                        //Текст обновления для дополнительного блока начинается на '>' но не начинается '> -'
                        if (line.startsWith('>') && !line.startsWith('> -')) {
                            //Добавляем в дополнительный блок контент с текстом обновления
                            page.block[page.block.length - 1].content.push(line.replace('> ', ''));
                        }
                    }

                    //Добавляем последнию страницу
                    pages.push(page);

                    resolve({ title: data[0].name, tag: data[0].tag_name, content: pages });
                } else {
                    //Возвращаем пусто
                    resolve({});
                }
            }
        });
    },

    html: {
        title: function (title, count) {
            return `<div class="title-block ${count == 1 ? "first" : count == 2 ? "second" : "third"}"><span></span>${title}</div>`
        },
        info: function (title, icon, content) {
            return `<div class="info-block"><div class="icon">${dialog_icons[icon]}</div><div class="content"><div class="title">${title}</div>${content}</div></div>`
        },
        info_update: function (text) {
            return `<div class="info">${text}</div>`;
        }
    }
}