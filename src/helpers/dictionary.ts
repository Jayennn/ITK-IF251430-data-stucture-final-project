import dummy from '../data/data.json';
import type { Entry } from '../models/entry';
import { DictionaryService } from '../services/DictionaryService';
import { RedBlackTree } from '../structures/rbt/Tree';
import { Naruto } from '../components/Naruto';
import { Trie } from '../structures/trie/Trie';
import { Calculator } from '../components/Calculator';
import { AutoCompleteService } from '../services/AutoCompleteService';

/* Raw Data */
const dictionary: Entry[] = dummy.data;

const TREE_KEYWORD_ID: RedBlackTree<string, Entry> = new RedBlackTree<string, Entry>();
const TREE_KEYWORD_EN: RedBlackTree<string, Entry> = new RedBlackTree<string, Entry>();

const autocom = new Trie();

dictionary.forEach((dict) => {
  TREE_KEYWORD_ID.insert(dict.keyword_id, dict);
  TREE_KEYWORD_EN.insert(dict.keyword_en, dict);
  autocom.insert(dict.keyword_id);
});

const dictionaryEasterEgg: Entry[] = [
  {
    keyword_id: 'Buram',
    keyword_en: 'Blur',
    definition_id:
      'Kondisi penglihatan yang tidak jelas, biasanya terjadi saat bangun tidur atau lupa pakai kacamata.',
    definition_en:
      'A condition of unclear vision, usually occurs when waking up or forgetting to wear glasses.',
    easterEgg: {
      action: () => {
        const root: HTMLElement = document.getElementById('root')!;
        root.classList.add('blur');
        setTimeout(() => {
          root.classList.remove('blur');
        }, 5000);
      },
    },
  },
  {
    keyword_id: 'Naruto',
    keyword_en: 'Naruto',
    definition_id:
      'Serial manga dan anime Jepang yang menceritakan petualangan ninja bernama Naruto Uzumaki.',
    definition_en:
      'A Japanese manga and anime series that follows the adventures of a ninja named Naruto Uzumaki.',
    easterEgg: {
      component: Naruto,
    },
  },
  {
    keyword_id: 'Kalkulator',
    keyword_en: 'Calculator',
    definition_id:
      'Alat atau program komputer yang digunakan untuk melakukan perhitungan otomatis seperti penjumlahan, pengurangan, perkalian, pembagian, hingga operasi matematika yang lebih kompleks.',
    definition_en:
      'A device or computer program used to perform automatic calculations such as addition, subtraction, multiplication, division, and more advanced mathematical operations.',
    easterEgg: {
      component: Calculator,
    },
  },
  {
    keyword_id: 'Rotasi',
    keyword_en: 'Rotate',
    definition_id:
      'Gerakan memutar suatu objek pada sumbu tertentu sehingga posisi atau orientasinya berubah tanpa mengubah bentuk atau ukurannya.',
    definition_en:
      'The movement of rotating an object around a specific axis, causing its position or orientation to change without altering its shape or size.',
    easterEgg: {
      action: () => {
        const app: HTMLElement = document.getElementById('app')!;
        app.classList.add('animate-spin');
        setTimeout(() => {
          app.classList.remove('animate-spin');
        }, 5000);
      },
    },
  },
  {
    keyword_id: 'Gempa',
    keyword_en: 'Earthquake',
    definition_id:
      'Goyangan atau getaran pada permukaan bumi yang disebabkan oleh pergerakan lempeng tektonik atau aktivitas vulkanik hingga dapat menimbulkan kerusakan pada bangunan dan lingkungan.',
    definition_en:
      'A shaking or vibration of the Earth’s surface caused by tectonic plate movements or volcanic activity, potentially leading to damage to structures and the environment.',
    easterEgg: {
      action: () => {
        const root = document.getElementById('root')!;
        root.classList.add('shake');
        setTimeout(() => root.classList.remove('shake'), 1200);
      },
    },
  },
  // === New Easter Egg: Hitam ===
  {
    keyword_id: 'Hitam',
    keyword_en: 'Black',
    definition_id:
      'Warna paling gelap yang menyerap seluruh cahaya dan membuat tampilan menjadi gelap.',
    definition_en:
      'The darkest color that absorbs all light and makes the appearance dark.',
    easterEgg: {
      action: () => {
        const root = document.getElementById('root')!;
        root.style.transition = 'background 0.5s ease, color 0.5s ease';
        root.style.background = 'black';
        root.style.color = 'white';
      },
    },
  },
];

dictionaryEasterEgg.forEach((dict) => {
  TREE_KEYWORD_ID.insert(dict.keyword_id, dict);
  TREE_KEYWORD_EN.insert(dict.keyword_en, dict);
  autocom.insert(dict.keyword_id);
});

console.log('EN RBT Total Nodes:', TREE_KEYWORD_EN.getTotalNodes());
console.log('ID RBT Total Nodes:', TREE_KEYWORD_ID.getTotalNodes());

console.log(autocom.suggest('a'));

export const autoCompleteService = new AutoCompleteService(
  TREE_KEYWORD_ID,
  TREE_KEYWORD_EN,
  [...dictionary, ...dictionaryEasterEgg]
);

export const dictionaryService = new DictionaryService(
  TREE_KEYWORD_ID,
  TREE_KEYWORD_EN
);
