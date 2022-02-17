// --- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(name1, catchPhrase, bs) {
        this.name1 = name1;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

class Main {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

let scrnMain = new Main(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496')), '1-770-736-8031 x56442', 'hildegard.org', new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'))
console.log(scrnMain);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
class ClassTags {
    constructor(a, div, h1, span, input, form, option, select) {
        this.a = a;
        this.div = div;
        this.h1 = h1;
        this.span = span;
        this.input = input;
        this.form = form;
        this.option = option;
        this.select = select;
    }
}

class IAttr {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

class FakeArrayAttribute {
    constructor(attrs1, attrs2, attrs3) {
        this.attrs1 = attrs1;
        this.attrs2 = attrs2;
        this.attrs3 = attrs3;
    }
}

class InfoTags {
    constructor(name, action, arrayAttribute) {
        this.name = name;
        this.action = action;
        this.arrayAttribute = arrayAttribute;
    }
}

let scrnTags = new ClassTags(new InfoTags(`a`, `Тег a является одним из важных элементов HTML и предназначен для создания ссылок.`, new FakeArrayAttribute(new IAttr(`Target`, `Имя окна или фрейма, куда браузер будет загружать документ.`), new IAttr(`Title`, `Добавляет всплывающую подсказку к тексту ссылки.`), new IAttr(`Type`, `Указывает MIME-тип документа, на который ведёт ссылка.`))),
    new InfoTags(`div`, `Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`, new FakeArrayAttribute(new IAttr(`align`, `Задает выравнивание содержимого тега div.`), new IAttr(`title`, `Добавляет всплывающую подсказку к содержимому.`))),
    new InfoTags(`h1`, `Тег h1 представляет собой наиболее важный заголовок первого уровня`, new FakeArrayAttribute(new IAttr(`align`, `Определяет выравнивание заголовка`))),
    new InfoTags(`span`, `Тег span предназначен для определения строчных элементов документа`, new FakeArrayAttribute(new IAttr(`Для этого тега доступны универсальные атрибуты и события.`))),
    new InfoTags(`input`, `Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`, new FakeArrayAttribute(new IAttr(`size`, `Ширина текстового поля.`), new IAttr(`step`, `Шаг приращения для числовых полей.`), new IAttr(`value`, `Значение элемента.`))),
    new InfoTags(`form`, `Тег form устанавливает форму на веб-странице`, new FakeArrayAttribute(new IAttr(`name`, `Имя формы`), new IAttr(`method`, `Метод протокола HTTP`), new IAttr(`enctype`, `Способ кодирования данных формы`))),
    new InfoTags(`option`, `Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.`, new FakeArrayAttribute(new IAttr(`disabled`, `Заблокировать для доступа элемент списка`), new IAttr(`label`, `Указание метки пункта списка`), new IAttr(`selected`, `Заранее устанавливает определенный пункт списка выделенным`))),
    new InfoTags(`select`, `Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`, new FakeArrayAttribute(new IAttr(`form`, `Связывает список с формой`), new IAttr(`multiple`, `Позволяет одновременно выбирать сразу несколько элементов списка`), new IAttr(`size`, `Количество отображаемых строк списка`))))
console.log(scrnTags);


//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }