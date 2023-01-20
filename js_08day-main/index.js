const API_Key = `JpvJst14W4TU85i--T3XzJP3aF3G84K-M28JUh9n5XY`
const getNews = async() =>{
    let header = new Headers({API_Key})
    let response = await fetch(url,{headers:header}) 
    let data =   await response.json() ; 
    newsData = data.articles;
    viewRender();

}
let newsData = [];
let topics = document.querySelectorAll('.gnb>li');
topics.forEach(ele=>ele.addEventListener('click',(e)=>getTopic(e)))
let searchBtn = document.querySelector('.search-btn');
let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=5`);

const getSearchNews = () =>{
    let searchKeyword = document.querySelector('#search').value;
    
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${searchKeyword}&page_size=5`);
    getNews()
}

searchBtn.addEventListener('click',getSearchNews)


const getTopic = (e) =>{
    let topic = e.target.dataset.topic;
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=5`);
    getNews()

}
//최근 해당 토픽 해드라인 뉴스 가져오기 
const getLatestHeadlines = () => {
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=5`);
    getNews()
}

//가져온 뉴스를 화면에 렌더 하는 함수 
const viewRender = () => {
    let newsDataResult = '' ;
    newsDataResult = newsData.map((ele)=>{
        return `<div class="news">
        <div class="thum-img">
            <img src="${ele.media}" alt="" class="news-img">
        </div>
        <div class="news-des">
            <h2 class="title">${ele.title}</h2>
            <p class="des-txt">${ele.summary}</p>
            <div class="date">${ele.rights}  ${ele.published_date}</div>
        </div>
    </div>`
    })
    
    document.querySelector('.news-board').innerHTML = newsDataResult ;

}
getLatestHeadlines();