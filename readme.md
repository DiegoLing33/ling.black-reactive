# @ling.black/reactive

Реактивные элементы. Библиотека реализована крайне просто, исключительно для очевидного и легкого функционала. Имеется
некоторая оптимизация.

## Установка
```
yarn add @ling.black/reactive
```

## Использование

Каждый реативный элемент имеет следующие параметры/методы:
- `reactiveVar.value` - значение реактивной переменной
- `reactiveVar.watch( value => console.log(value) )` - добавление наблюдателя
- `reactiveVar.shake()` - имитация изменения, которая приводит к активации всех наблюдателей

```js
import {reactive} from "@ling.black/reactive";

// Реактивная переменная
const myName = reactive('Вася');

// Наблюдатель
let wasName = myName.value;
myName.watch( name => {
   console.log(wasName + ' теперь ' + name);
   wasName = name;
});

// Изменения
myName.value = 'Олег';
myName.value = 'Кирилл';

// Console:
// Вася теперь Олег
// Олег теперь Кирилл
```

### Массив

```js
import {reactiveArray} from "@ling.black/reactive";

// Реактивная переменная
const arr = reactiveArray([0, 1]);

// Наблюдатель
arr.watch( a => console.log(a));

// Изменения
arr.push(2);
arr.push(3);

// Console:
// [ 0, 1, 2 ]
// [ 0, 1, 3 ]

arr.removeAt(0);
console.log(arr.value); // [ 1, 2, 3 ]
```

В отличаи от обычных переменных, массивы обладают следующими методами:
- `reactArr.set( arr: T[] )` - заменяет массив
- `reactArr.push( ...items: T[] )` - добавляет элемент в массив
- `reactArr.remove( item: T )` - удаляет элемент из массива
- `reactArr.removeAt( index: number )` - удаляет элемент из массива по индексу
- `reactArr.clear()` - очищает массив

### Объекты

Реализация реактивных объектов не добавлена. Рекомендовано собирать объект из простых реактивных типов.