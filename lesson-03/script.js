
// const arr = [7, 3, 8, 9, 2];
// const newArr = arr.slice(1);
// console.log(newArr);

// const deadline = 0;
// if (!deadline) {
//   console.log('if block');
// } else {
//   console.log('else block');
// }

// # Модуль 2. Заняття 3. Масиви
//
// ## Example 1 - Базові операції з масивом
//
// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
// довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.
//
// const genres = ['Jazz', 'Blues'];
// genres.push('Rock&Roll');
//const firstElement = genres.shift();
//console.log(genres.shift());
//console.log(genres[genres.length - 1]);
// genres.unshift('Country', 'Reggae');
// console.log(genres);
//
// ## Example 2 - Масиви та рядки
//
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.
//
// const values = '8 11';
// const valuesArr = values.split(' ');
//const height = Number(valuesArr[0]);
// console.log(valuesArr);
// console.log(Number(valuesArr[0]) * Number(valuesArr[1]));

//
// ## Example 3 - Перебір масиву
//
// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
//   Нумерація елементів повинна починатися з `1`.
//
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`Element ${i + 1}: `, fruits[i]);
// }
//
// ## Example 4 - Масиви та цикли
//
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
//   розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.
//
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: `, phonesArr[i]);
// }

//
// ## Example 5 - Масиви та рядки
//
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.
//
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// wordsArr.pop();
// wordsArr.shift();
// console.log(`"${wordsArr.join(' ')}"`);
// const wordsArr = string.split(' ');
// const newWordsArr = wordsArr.slice(1, wordsArr.length -1);
// console.log(newWordsArr.join(' '));

//
// ## Example 6 - Масиви та рядки
//
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.
//
// const string = 'Welcome to the future';
// let newSting = '';
// for (let i = string.length - 1; i >=0; i -= 1) {
//   newSting += string[i]
// }
// console.log(newSting);

// const charsArr = string.split('');
// const reversedCharsArr = charsArr.reverse();
// console.log(reversedCharsArr.join(''));
// console.log(string.split('').reverse().join(''));

//
// ## Example 7 - Сортування масиву із циклом
//
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i += 1) {
//   // порівнюємо поточний елемент з іншими елементами масиву
//   for (let j = i + 1; j < langs.length; j += 1) {
//     // мфняємо елементи місцями
//     if (langs[i] > langs[j]) {
//       const thirdValue = langs[i];
//       langs[i] = langs[j];
//       langs[j] = thirdValue
//     }
//   }
// }
// console.log(langs);
//
// ## Example 8 - Пошук елемента
//
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
//
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// for (let number of numbers) {
//   if (min === undefined || number < min) {
//     min = number
//   }
// }
// console.log(min); // 1
