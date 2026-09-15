const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

const responses = {
  start: {
    title: 'Build a bridge from recognition to recall.',
    text: 'Choose a 30-second audio clip. Listen once, then retell its meaning aloud in simple Mandarin without reading. Repeat daily for seven days.'
  },
  pause: {
    title: 'Train phrases, not isolated words.',
    text: 'Record a two-minute answer to “你为什么学习中文？” Use three linking phrases: 因为, 所以 and 但是. Repeat until you need fewer pauses.'
  },
  flow: {
    title: 'Practise flexibility and natural expression.',
    text: 'Tell the same short story twice: once formally and once as if speaking to a friend. Notice which expressions change and ask a native speaker for feedback.'
  }
};

const result = document.querySelector('#check-result');
document.querySelectorAll('[data-result]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-result]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const choice = responses[button.dataset.result];
    result.innerHTML = `<p class="result-label">Your next move</p><h3>${choice.title}</h3><p>${choice.text}</p>`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
