//Данные заблокировыные теги
let saved_tags = {
    key: 't_save',
    data: ['vector'],
    version: 0.2
}

//Maximal count words for copy
let maxwords = 49;
//Curent count words in list
let curwords = 1;

//Elements
let input = $('.tag-input > input');

//Start Program
(() => {
    saved_tags = LoadData(saved_tags, true);
    UpdateCount();

    ShowLockTags();
    OnClickLoked();
    OnClickRemove();
    //Sortable function ul li list
    $('.main-tag, .compl-tag').sortable({
        cancel: '.locked',
        revert: 100,
        connectWith: ".connected",
        placeholder: "tag-placeholder",
        forcePlaceholderSize: 'true',
        stop: function (event, ui) {
            let count = $('.main-tag > li').length;
            if (count > 10) {
                var element = $('.main-tag > li:last-child').detach();
                $('.compl-tag').prepend(element);
            }
        },

    }).disableSelection();

    //Copy
    $('footer > .btn-submit').click(() => {
        let elements = $('li');
        let clip = "";
        for (let i = 0; i < elements.length; i++) {
            const element = $(elements[i]).find('.text');
            if (i >= maxwords) {
                continue;
            }
            clip += element.text().trim();
            if (i < elements.length - 1 && i + 1 < maxwords) {
                console.log(i, elements.length - 1, clip);
                clip += ', ';
            }
        }
        copyToClipboard(clip);
        console.log(clip);
    });

    //Watch the event btn add words
    $('.tag-input > .btn-submit').click(() => {
        AddTags();
    });

    //Watch event input change
    input.keyup(() => {
        let val = input.val().toLowerCase();
        if (val.length > 1) {
            $('ul').addClass('search-tag');
            SearchTags(val);
        } else {
            $('ul').removeClass('search-tag');
            $('ul > li').removeClass('finded');
        }
    });


    input.keyup((e) => {
        if (e?.originalEvent?.keyCode == 13) {
            AddTags();
        }
    })

    //Check update
    //Если у пользователя нет ключа обновления то он первый раз
    if (localStorage.getItem(UpdateWindow.key) == null) {
        localStorage.setItem(UpdateWindow.key, true);
    }

    //Обновляем количество тегов
    UpdateCount();

    //GetGithubReleases
    GitHubRelease();
})();

function SearchTags(value) {
    let words = value.split(/[,,;]/);
    let list = $('ul > li');

    for (let i = 0; i < list.length; i++) {
        const li = $(list[i]);
        let content = li.text().trim();
        for (let i = 0; i < words.length; i++) {
            const word = words[i].trim();
            if (content.match(word) && word.length > 0) {
                li.addClass('finded');
            } else {
                li.removeClass('finded');
            }
        }
    }
}

function AddTags() {
    //Get value input
    let value = input.val().toLowerCase();
    if (value.length > 1) {
        //Split text on symbvols , and ;
        let elements = value.split(/[,,;,.,:]/);

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            AddTag(element);
        }

        input.val('');
    }
    UpdateCount();
    $('ul').removeClass('search-tag');
    $('ul > li').removeClass('finded');
}

/**
 * Added tag to list
 * @param {string} tag - Text tag
 */
function AddTag(tag, lock = false) {
    //Remove spaces start and end string
    tag = tag.trim();

    if (tag.length == 0) {
        return;
    }

    for (let i = 0; i < $('ul>li').length; i++) {
        const e = $($('ul>li')[i]).find( ".text" ).text().trim();
        if (e === tag) {
            //Add count +1 to span text
            //Search .count-repetition
            if($($('ul>li')[i]).find('.count-repetition').length != 0){
                let val = parseInt($($($('ul>li')[i]).find('.count-repetition')[0]).attr('data-count'));
                $($($('ul>li')[i]).find('.count-repetition')[0]).attr('data-count', val+1);
                $($($('ul>li')[i]).find('.count-repetition')[0]).text(val+1);
            }else{
                $($('ul>li')[i]).append('<span class="count-repetition" data-count="1">1</span>');
            }
            return;
        }
    }

    //if the number of words in the main list exceeds 10, then add to the additional
    let count = $('.main-tag > li').length;
    if (count < 10) {
        $('.main-tag').append(GenerateTag(tag, lock));
    } else {
        $('.compl-tag').append(GenerateTag(tag, lock));
    }
}

/**
 * Tag visual generation
 * @param {string} content - content to be displayed
 * @returns will return the finished html
 */
function GenerateTag(content, lock = false) {
    return ` <li class="${lock ? 'locked' : ''}"><span class="icon-lock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg></span><span class="text">${content}</span><span class="icon-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></span></li>`;
}

//Update counts tags
function UpdateCount() {
    console.log('obnovlaem');
    //Get Current count tags
    curwords = $('li').length;
    //Set text max words in visual
    $('.info-words > .count > .max').text(maxwords);
    //Set curent words
    $('.info-words > .count > .current').text(curwords);
}

function copyToClipboard(text) {
    const elem = document.createElement('textarea');  // создаем временный элемент в виде текстового поля
    elem.value = text;  // присваиваем ему значение переданного текста
    document.body.appendChild(elem);  // добавляем элемент в DOM
    elem.select();  // выделяем текст в поле
    document.execCommand('copy');  // копируем выделенный текст в буфер обмена
    document.body.removeChild(elem);  // удаляем временный элемент
}


/**
 * Load data with version match
 * @param {Object} obj - Data to load
 * @param {Boolean} log - Log to console
 * @returns Object parametrs
 */
function LoadData(obj, log = false) {
    if (!obj.key) {
        if (log)
            console.log('On object not variable key', obj);
        return obj;
    }
    let data = JSON.parse(localStorage.getItem(obj.key));
    if (data) {
        if (data.version == obj.version) {
            if (log)
                console.log('Data versions match');
            return data;
        } else {
            if (log)
                console.log('Data versions do not match');
            if (log)
                console.log('Data version: ' + data.version + ' Obj version: ' + obj.version);
            SetData(obj, log)
        }
    } else {
        if (log)
            console.log('Not found data in localStorage', data, localStorage);
        SetData(obj, log);
    }
}

/**
 * Save parametrs to localStorage
 * @param {Object} obj - Data to set localStorage
 * @param {Boolean} log - Log to console
 */
function SetData(obj, log = false) {
    if (!obj.key) {
        if (log)
            console.log('On object not variable key', obj);
        return;
    }

    if (log)
        console.log(`Object ${obj.key} saved to localStorage. Version: ${obj.version}`);
    localStorage.setItem(obj.key, JSON.stringify(obj));
}

function OnClickLoked() {
    $('ul').on('click', 'li > .icon-lock', (e) => {
        let element = $(e.currentTarget).closest('li');
        if (element.hasClass('locked')) {
            element.removeClass('locked');
            let index = saved_tags.data.indexOf(element.text().trim());
            if (index > -1) {
                saved_tags.data.splice(index, 1);
                SetData(saved_tags, true);
            }
        } else {
            element.addClass('locked');
            saved_tags.data.push(element.text().trim());
            SetData(saved_tags, true);
        }
    });
}

function OnClickRemove() {
    $('ul').on('click', 'li > .icon-remove', (e) => {
        let element = $(e.currentTarget).closest('li');
        element.remove();
        //Обновляем количество тегов
        UpdateCount();
    });
}

function ShowLockTags() {
    for (let i = 0; i < saved_tags.data.length; i++) {
        const text = saved_tags.data[i];
        AddTag(text, true);
    }
}

//Get data from github
async function GitHubRelease() {
    fetch("https://api.github.com/repos/key-stoker/key-stoker.github.io/releases").then(async (response) => {
        if (response.ok) {
            let data = await response.json();

            //If the version of the git differs from the version saved, it shows a dialog box

            let saved_git_verrsion = JSON.parse(localStorage.getItem('github-version'));
            if (saved_git_verrsion == null || saved_git_verrsion.tag != data[0].tag_name) {
                //If the user does not have an update key, then this is the first time
                if (localStorage.getItem(UpdateWindow.key) == null) {
                    localStorage.setItem(UpdateWindow.key, true);
                }
                //If there was an update, then we show a dialog box
                if (localStorage.getItem(UpdateWindow.key) == "true") {
                    UpdateWindow.data = data;
                    WindowManagment.click(UpdateWindow);
                }
            }
        }
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}