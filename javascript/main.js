//Maximal count words for copy
let maxwords = 49;
//Curent count words in list
let curwords = 1;

//Elements
let input = $('.tag-input > input');

//Start Program
(() => {
    UpdateCount();
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
            const element = $(elements[i]);
            if(i >= maxwords){
                continue;
            }
            clip += element.text().trim();
            if(i < elements.length - 1 && i + 1 < maxwords){
                console.log(i, elements.length - 1, clip);
                clip += ',';
            }
        }
        copyToClipboard(clip);
        console.log(clip);
        // $('li').each(function (index) {
        //     console.log(index);
        //     if (index === maxwords) {
        //         return false; // останавливаем перебор, если дошли до 49-го элемента
        //     }
        //     if (index !== 0) { // если это не первый элемент, то добавляем запятую
        //         $(this).prepend(', ');
        //     }
        // });
    });

    //Watch the event btn add words
    $('.tag-input > .btn-submit').click(() => {
        AddTags();
    });

    //Watch event input change
    input.keyup(() => {
        let val = input.val();
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
    let value = input.val();
    if (value.length > 2) {
        //Split text on symbvols , and ;
        let elements = value.split(/[,,;]/);

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
function AddTag(tag) {
    //Remove spaces start and end string
    tag = tag.trim();

    if (tag.length == 0) {
        return;
    }

    for (let i = 0; i < $('ul>li').length; i++) {
        const e = $($('ul>li')[i]).text().trim();
        if (e === tag) {
            return;
        }
    }

    //if the number of words in the main list exceeds 10, then add to the additional
    let count = $('.main-tag > li').length;
    if (count < 10) {
        $('.main-tag').append(GenerateTag(tag));
    } else {
        $('.compl-tag').append(GenerateTag(tag));
    }

    curwords++;
}

/**
 * Tag visual generation
 * @param {string} content - content to be displayed
 * @returns will return the finished html
 */
function GenerateTag(content) {
    return ` <li><span class="icon-lock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg></span><span class="text">${content}</span></li>`;
}

function UpdateCount() {
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