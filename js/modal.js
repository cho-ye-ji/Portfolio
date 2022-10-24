// 모달 열기
// function modalOpen(){
//     document.querySelector('.modal_wrap').style.display='block';
//     document.querySelector('.modal_background').style.display='block';
// }

// 모달 끄기
// function modalClose(){
//     document.querySelector('.modal_wrap').style.display='none';
//     document.querySelector('.modal_background').style.display='none';
// }

// 버튼 클릭리스너 닫기
// document.querySelector('#modal_btn').addEventListener('click',modalOpen);
// document.querySelector('.modal_close').addEventListener('click',modalClose);


// 두번째

// const modalOpen01 = () => {
//     document.querySelector(".modal").classList.remove("hidden");
// }

// const modalClose01 = () => {
//     document.querySelector(".modal").classList.add("hidden");
// }

// document.querySelector("#modal_btn01").addEventListener("click", modalOpen01);
// document.querySelector(".closeBtn").addEventListener("click", modalClose01);
// document.querySelector(".mbg").addEventListener("click", modalClose01);


//다시 세팅
// const modal = document.getElementById("modal");
// const btnModal = document.getElementById("modal_btn");

// btnModal.addEventListener("click", e => {
//     modal.style.display="flex"
// });

//버튼 누르면 모달창 켜지게
// const modal = document.getElementById("modal");
// const btnModal = document.getElementById("btn-modal"
// btnModal.addEventListener("click", e =>{
//     modal.style.display="flex"
// });

//X 클릭시 모달창 꺼지게
// const closeBtn = modal.querySelector(".close-area");
// closeBtn.addEventListener("click", e=>{
//     modal.style.display="none"
// }

// 모달영영 외에 클릭시 모달창 꺼지게
// modal.addEventListener("click", e =>{
//     const evTarget = e.target;
//     if(evTarget.classList.contains("modal-overlay")){
//         modal.style.display="none"
//     }
// });

//Esc 버튼 누르면 모달창 꺼지게
// window.addEventListener("keyup", e =>{
//     if(modal.style.display==="flex"&&e.key ==="Escape"){
//         modal.style.display = "none";
//     }
// });


// web 부분 모달
// const modal01 = document.getElementById("w01");


 
 // 버튼 클릭시 모달창이 켜지게 하기, 설정 전 모달의 초기상태 display:none;
 const modal = document.querySelector(".modal-content2");
 const modalImg = document.querySelector(".modal-img");
 const btnModal = document.getElementById("btn-modal");
//  const btnModal = document.querySelector(".btn");
//  const openModal = document.querySelector(".modal-content")

 btnModal.addEventListener("click", e => {
    //  opemModal.style.display="block"
     modal.style.display="block"

 });

  // X 버튼 클릭시 모달창 꺼지게 하기
  const closeBtn = modal.querySelector(".btn btn-default");
  closeBtn.addEventListener("click", e =>{
      modal.style.display = "none"
  });

//   .modal-content가 디스플레이 block이 될 수 있게

//모달테스트 구간
$('body').on('scroll touchmove mousewheel',function(event){
    event.preventDefult();
    event.stopPropagation();
    return false;
  });
  