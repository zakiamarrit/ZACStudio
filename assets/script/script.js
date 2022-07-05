//smooth scroll
const scrollLink = document.getElementsByClassName('scroll-link');

for (let i = 0; i < scrollLink.length; i++) {
  scrollLink[i].addEventListener('click', function (e) {
    const tujuan = document.querySelector(scrollLink[i].getAttribute('href'));
    document.documentElement.scrollTop = tujuan.offsetTop - 90;
    e.preventDefault();
  });
}

// ubah style saat window discroll
var header = document.getElementById('home');
const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
};
window.addEventListener('scroll', onScroll);

//dropdown menu untuk tampilan mobile
const navSlidee = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');

  // navigasi toggle
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  //untuk animasi
  navlinks.forEach((link, index) => {
    link.style.animation = 'navigationLinkFade 0.5s ease forwards $(index/7+1.5)s';
  });
};

navSlidee();
