import './styles/main.scss';

// Мобільне меню
const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('#nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('nav--open', !open);
});

// Фільтр портфоліо
const chips = document.querySelectorAll('.chip');
const items = document.querySelectorAll('.grid__item');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => {
      c.classList.remove('chip--active');
      c.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('chip--active');
    chip.setAttribute('aria-pressed', 'true');

    items.forEach((item) => {
      const show = chip.dataset.filter === 'all' || item.dataset.category === chip.dataset.filter;
      item.hidden = !show;
    });
  });
});

// Форма
const form = document.querySelector('.form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach((input) => {
    const error = form.querySelector(`#${input.id}-error`);
    const ok = input.checkValidity();
    input.classList.toggle('form__input--error', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    if (error) error.hidden = ok;
    if (!ok) valid = false;
  });

  form.querySelector('.form__success').hidden = !valid;
  if (valid) form.reset();
});
