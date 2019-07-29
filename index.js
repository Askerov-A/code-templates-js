// ШАБЛОНЫ ПРОЕКТИРОВАНИЯ ФУНКЦИЙ

// Примеры функций
// - Именованные функции выражения
const a = function a() {
    // do something
}
// - Анонимные функции выражения
const b = function() {
    // do something
}
// - Функции объявления
function c() {
    // do something
}

// Шаблоны API - помогают делать удобные интерфейсы для функций
// Шаблон применения функций обратного вызова (callbacks)
function useCallback(callback) {
    callback();
}
// Объекты с параметрами
function useObjectAsParams(obj) {
    return obj.a + obj.b;
}
// или
function useObjectAsParams({ a, b }) {
    return a + b;
}
// Возвращение функций
function returnFunc() {
    return function() {
        return 2;
    }
}
// Каррирование
function hello(a,b) {
    if (!b) {
        return function(b) {
            a + b;
        }
    }
    return a + b;
}

// Шаблоны инициализации - позволяют выполнить первичные настройки один раз
// Немедленно вызываемые функции
(function immidiately() {
    // no affect to global scope
}())
// Немедленная инициализация объекта
({
    a: '1',
    b: '2',
    return12: function() {
        return a + b;
    },
    init: function() {
        this.return12();
    }
}.init())
// Выделение ветвей, выполняющихся на этапе инициализации
const funcs = {
    one: undefined,
    two: undefined
}
if ('some cond') {
    funcs.one = function() {
        // do something
    }
    funcs.two = function() {
        // do something
    }
} else {
    funcs.one = function() {
        // do else
    }
    funcs.two = function() {
        // do else
    }
}

// Шаблоны оптимизации производительности
// Мемоизация (memorization)
function remember(a) {
    if (!this.cache[a]) {
        this.cache[a] = a + 1;
    }
    return this.cache[a];
}
remember.cache = {};
// Самоопределяемые функции
let doLessLater = function() {
    // do more
    doLessLater = function() {
        // do less
    }
}