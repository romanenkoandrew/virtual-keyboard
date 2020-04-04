const englishLayout = [
  ['`', '~', 4, 'Backquote'],
  ['1', '!', 4, 'Digit1'],
  ['2', '@', 4, 'Digit2'],
  ['3', '#', 4, 'Digit3'],
  ['4', '$', 4, 'Digit4'],
  ['5', '%', 4, 'Digit5'],
  ['6', '^', 4, 'Digit6'],
  ['7', '&', 4, 'Digit7'],
  ['8', '*', 4, 'Digit8'],
  ['9', '(', 4, 'Digit9'],
  ['0', ')', 4, 'Digit0'],
  ['-', '_', 4, 'Minus'],
  ['=', '+', 4, 'Equal'],
  ['Backspace', 'Backspace', 8, 'Backspace'],
  ['Tab', 'Tab', 6, 'Tab'],
  ['q', 'Q', 4, 'KeyQ'],
  ['w', 'W', 4, 'KeyW'],
  ['e', 'E', 4, 'KeyE'],
  ['r', 'R', 4, 'KeyR'],
  ['t', 'T', 4, 'KeyT'],
  ['y', 'Y', 4, 'KeyY'],
  ['u', 'U', 4, 'KeyU'],
  ['i', 'I', 4, 'KeyI'],
  ['o', 'O', 4, 'KeyO'],
  ['p', 'P', 4, 'KeyP'],
  ['[', '{', 4, 'BracketLeft'],
  [']', '}', 4, 'BracketRight'],
  ['\\', '|', 6, 'Backslash'],
  ['Caps Lock', 'Caps Lock', 7, 'CapsLock'],
  ['a', 'A', 4, 'KeyA'],
  ['s', 'S', 4, 'KeyS'],
  ['d', 'D', 4, 'KeyD'],
  ['f', 'F', 4, 'KeyF'],
  ['g', 'G', 4, 'KeyG'],
  ['h', 'H', 4, 'KeyH'],
  ['j', 'J', 4, 'KeyJ'],
  ['k', 'K', 4, 'KeyK'],
  ['l', 'L', 4, 'KeyL'],
  [';', ':', 4, 'Semicolon'],
  ["'", '"', 4, 'Quote'],
  ['Enter', 'Enter', 9, 'Enter'],
  ['Shift', 'Shift', 8, 'ShiftLeft'],
  ['z', 'Z', 4, 'KeyZ'],
  ['x', 'X', 4, 'KeyX'],
  ['c', 'C', 4, 'KeyC'],
  ['v', 'V', 4, 'KeyV'],
  ['b', 'B', 4, 'KeyB'],
  ['n', 'N', 4, 'KeyN'],
  ['m', 'M', 4, 'KeyM'],
  [',', '<', 4, 'Comma'],
  ['.', '>', 4, 'Period'],
  ['/', '?', 4, 'Slash'],
  ['▲', '▲', 3, 'ArrowUp'],
  ['Shift', 'Shift', 9, 'ShiftRight'],
  ['Ctrl', 'Ctrl', 5, 'ControlLeft'],
  ['En', 'En', 4, 'Lang'],
  ['Alt', 'Alt', 4, 'AltLeft'],
  ['Space', 'Space', 27, 'Space'],
  ['Alt', 'Alt', 4, 'AltRight'],
  ['◄', '◄', 4, 'ArrowLeft'],
  ['▼', '▼', 3, 'ArrowDown'],
  ['►', '►', 4, 'ArrowRight'],
  ['Ctrl', 'Ctrl', 5, 'ControlRight'],
];

const russianLayout = [
  ['ё', 'Ё', 4, 'Backquote'],
  ['1', '!', 4, 'Digit1'],
  ['2', '"', 4, 'Digit2'],
  ['3', '№', 4, 'Digit3'],
  ['4', ';', 4, 'Digit4'],
  ['5', '%', 4, 'Digit5'],
  ['6', ':', 4, 'Digit6'],
  ['7', '?', 4, 'Digit7'],
  ['8', '*', 4, 'Digit8'],
  ['9', '(', 4, 'Digit9'],
  ['0', ')', 4, 'Digit0'],
  ['-', '_', 4, 'Minus'],
  ['=', '+', 4, 'Equal'],
  ['Backspace', 'Backspace', 8, 'Backspace'],
  ['Tab', 'Tab', 6, 'Tab'],
  ['й', 'Й', 4, 'KeyQ'],
  ['ц', 'Ц', 4, 'KeyW'],
  ['у', 'У', 4, 'KeyE'],
  ['к', 'К', 4, 'KeyR'],
  ['е', 'Е', 4, 'KeyT'],
  ['н', 'Н', 4, 'KeyY'],
  ['г', 'Г', 4, 'KeyU'],
  ['ш', 'Ш', 4, 'KeyI'],
  ['щ', 'Щ', 4, 'KeyO'],
  ['з', 'З', 4, 'KeyP'],
  ['х', 'Х', 4, 'BracketLeft'],
  ['ъ', 'Ъ', 4, 'BracketRight'],
  ['\\', '/', 6, 'Backslash'],
  ['Caps Lock', 'Caps Lock', 7, 'CapsLock'],
  ['ф', 'Ф', 4, 'KeyA'],
  ['ы', 'Ы', 4, 'KeyS'],
  ['в', 'В', 4, 'KeyD'],
  ['а', 'А', 4, 'KeyF'],
  ['п', 'П', 4, 'KeyG'],
  ['р', 'Р', 4, 'KeyH'],
  ['о', 'О', 4, 'KeyJ'],
  ['л', 'Л', 4, 'KeyK'],
  ['д', 'Д', 4, 'KeyL'],
  ['ж', 'Ж', 4, 'Semicolon'],
  ['э', 'Э', 4, 'Quote'],
  ['Enter', 'Enter', 9, 'Enter'],
  ['Shift', 'Shift', 8, 'ShiftLeft'],
  ['я', 'Я', 4, 'KeyZ'],
  ['ч', 'Ч', 4, 'KeyX'],
  ['с', 'С', 4, 'KeyC'],
  ['м', 'М', 4, 'KeyV'],
  ['и', 'И', 4, 'KeyB'],
  ['т', 'Т', 4, 'KeyN'],
  ['ь', 'Ь', 4, 'KeyM'],
  ['б', 'Б', 4, 'Comma'],
  ['ю', 'Ю', 4, 'Period'],
  ['.', ',', 4, 'Slash'],
  ['▲', '▲', 3, 'ArrowUp'],
  ['Shift', 'Shift', 9, 'ShiftRight'],
  ['Ctrl', 'Ctrl', 5, 'ControlLeft'],
  ['Ru', 'Ru', 4, 'Lang'],
  ['Alt', 'Alt', 4, 'AltLeft'],
  ['Space', 'Space', 27, 'Space'],
  ['Alt', 'Alt', 4, 'AltRight'],
  ['◄', '◄', 4, 'ArrowLeft'],
  ['▼', '▼', 3, 'ArrowDown'],
  ['►', '►', 4, 'ArrowRight'],
  ['Ctrl', 'Ctrl', 5, 'ControlRight'],
];

class Keyboard {
  constructor() {
    this.language = 'eng';
    this.createKeyboard();
  }

  createKeyboard() {
    const container = document.createElement('div');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('div');

    container.classList.add('container');
    container.id = 'container';

    this.textarea.classList.add('textarea');
    this.textarea.setAttribute('placeholder', 'This keyboard was created on Windows');
    this.textarea.id = 'textarea';

    this.keyboard.classList.add('keyboard');
    this.keyboard.id = 'keyboard';

    this.createKeys();
    this.createKeysText(this.language, 0);
    container.appendChild(this.textarea);
    container.appendChild(this.keyboard);
    document.body.appendChild(container);
  }

  createKeys() {
    englishLayout.forEach((x) => {
      const key = document.createElement('div');
      key.classList.add('key');
      key.id = `${x[3]}`;
      key.style.gridColumn = `span ${x[2]}`;
      this.keyboard.appendChild(key);
    });
  }

  createKeysText(language, size) {
    if (language === 'eng') {
      this.keyboard.querySelectorAll('div').forEach((key, index) => {
        const settings = englishLayout[index];
        key.innerText = settings[size];
      });
    }
    if (language === 'rus') {
      this.keyboard.querySelectorAll('div').forEach((key, index) => {
        const settings = russianLayout[index];
        key.innerText = settings[size];
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const keyBoard = new Keyboard();
});
