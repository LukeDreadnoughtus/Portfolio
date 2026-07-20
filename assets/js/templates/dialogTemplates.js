import {
  state,
  i18n,
  projects
} from '../data/content.js';

const local = value => value?.[state.lang] ?? value;

const iconFile = name => name === 'Firebase'
  ? 'Firebase.svg'
  : name === 'CSS'
    ? 'CSS.svg'
    : name === 'HTML'
      ? 'HTML.svg'
      : 'JavaScript.svg';