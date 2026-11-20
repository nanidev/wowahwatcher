(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

  /* Scroll progress, nav state and the hero device settling flat */
  var nav = $('.nav');
  var stage = $('#stage');
  var ticking = false;
  function onScroll() {
    var max = root.scrollHeight - window.innerHeight;
    root.style.setProperty('--scroll', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
    nav.classList.toggle('scrolled', window.scrollY > 24);
    if (stage && !reduce) {
      var r = stage.getBoundingClientRect();
      var p = clamp((window.innerHeight - r.top) / (window.innerHeight * 0.95), 0, 1);
      stage.style.setProperty('--p', p.toFixed(3));
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* Pointer tilt on the hero device */
  if (stage && finePointer && !reduce) {
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty('--tx', (x * 7).toFixed(2));
      stage.style.setProperty('--ty', (-y * 5).toFixed(2));
    });
    stage.addEventListener('pointerleave', function () {
      stage.style.setProperty('--tx', 0);
      stage.style.setProperty('--ty', 0);
    });
  }

  /* Mobile menu */
  var btn = $('.menu-btn');
  var menu = $('#menu');
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('open', open);
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  doc.addEventListener('click', function (e) { if (!e.target.closest('.nav')) setMenu(false); });

  /* Reveal on scroll */
  var revealEls = $$('.reveal:not(.in)');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* Count-up numbers */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target + suffix; return; }
    var start = performance.now();
    var dur = 1400;
    (function step(t) {
      var k = clamp((t - start) / dur, 0, 1);
      var eased = 1 - Math.pow(1 - k, 4);
      el.textContent = Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(step);
    })(start);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { cio.observe(el); });
  }

  /* Cursor spotlight on cards */
  if (finePointer) {
    $$('.card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* Product tour: tabs with optional auto-advance */
  var tabs = $$('.tab');
  var shots = $$('.shots img');
  var tour = $('#tour');
  var current = 0;
  var auto = !reduce;
  var visible = false;

  function select(i, byUser) {
    current = (i + tabs.length) % tabs.length;
    tabs.forEach(function (t, k) {
      var on = k === current;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      t.classList.remove('auto', 'paused');
    });
    shots.forEach(function (s, k) { s.classList.toggle('on', k === current); });
    if (byUser) {
      auto = false;
    } else if (auto && visible) {
      // Restart the progress bar animation for the new tab
      void tabs[current].offsetWidth;
      tabs[current].classList.add('auto');
    }
    if (window.innerWidth <= 1000 && byUser) {
      tabs[current].scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i, true); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(current + d, true); tabs[current].focus(); }
      if (e.key === 'Home') { e.preventDefault(); select(0, true); tabs[0].focus(); }
      if (e.key === 'End') { e.preventDefault(); select(tabs.length - 1, true); tabs[tabs.length - 1].focus(); }
    });
    t.addEventListener('animationend', function () { if (auto && i === current) select(current + 1, false); });
  });
  if (tour) {
    tour.addEventListener('pointerenter', function () { tabs[current].classList.add('paused'); });
    tour.addEventListener('pointerleave', function () { tabs[current].classList.remove('paused'); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (auto) {
          if (visible) { tabs[current].classList.add('auto'); } else { tabs[current].classList.remove('auto'); }
        }
      }, { threshold: 0.4 }).observe(tour);
    }
  }

  /* Typing demo in the briefing card */
  var typer = $('#typer');
  if (typer) {
    var text = typer.getAttribute('data-text');
    if (reduce || !('IntersectionObserver' in window)) {
      typer.textContent = text;
    } else {
      var started = false;
      var tio = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        (function loop() {
          var i = 0;
          typer.textContent = '';
          (function tick() {
            typer.textContent = text.slice(0, ++i);
            if (i < text.length) { setTimeout(tick, 22 + Math.random() * 28); }
            else { setTimeout(loop, 6000); }
          })();
        })();
      }, { threshold: 0.5 });
      tio.observe(typer);
    }
  }
})();
