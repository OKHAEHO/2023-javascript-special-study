const listAll = document.querySelector('.main') ;
const list = document.querySelectorAll('.main>li')
const sub = document.querySelectorAll('.sub')

listAll.addEventListener('click',e=>{
    let isState= e.target.classList.contains('on') ;
    if(isState){ // li.on클래스가 있는 경우 
      e.target.classList.remove('on')
      e.target.childNodes.forEach(ele=>{
         if(ele.tagName === 'UL'){
           ele.classList.remove('open')
         }
      })
    }else{
        list.forEach(ele=>{ele.classList.remove('on')})
        e.target.classList.add('on')
        sub.forEach(ele=>ele.classList.remove('open'))
        let index = e.target.dataset.num;
        sub[index].classList.add('open')
    }
})