// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    'привет',
    'ку',
    'ты тут?',
    'ало нищий сын бляди',
    'ответь',
    'ау',
    'ты дома?',
    'у меня вопрос',
    'ты успешно допизделся',
    'ну?'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 500,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
