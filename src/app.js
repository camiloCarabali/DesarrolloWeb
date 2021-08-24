window.onscroll = () => {
  const fakeH = document.querySelector('#searchBar');
  const fakeF = document.querySelector('#footer');

  if (window.innerWidth >= 375) {
    if (window.pageYOffset >= 150) {
      fakeH.style.top = '-75px';
      fakeH.style.opacity = '0';
      fakeF.style.top = '700px';
      fakeF.style.opacity = '1';
    } else {
      fakeH.style.top = '0px';
      fakeH.style.opacity = '1';
      fakeF.style.top = '880px';
      fakeF.style.opacity = '0';
    }
  }
};


