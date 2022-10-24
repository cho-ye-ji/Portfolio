const menu = document.querySelector('.gnb.inner');
const toggleBtn = document.querySelector('.navbar_toggleBtn');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});

  //모달테스트 구간
  const modal = document.querySelector('.modal');
  const btnOpenPopup = document.querySelector('.btn-open-popup');


  btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'block';
    // https://url.kr/fhe9x7
    //모달 고정구간 추가 내용
  });

  // 모달 on
body.style.overflow = 'hidden';

// 모달 off
body.style.overflow = 'auto';

modal.classList.toggle('show');

//모달 구간 고정



