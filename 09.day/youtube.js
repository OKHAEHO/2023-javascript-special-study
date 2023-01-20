const API_KEY=`AIzaSyAHyqXXcuTDiAzXRlbl7OIH3zWstNRRYWA`
let videoDataBox=[];
const videoListBox = document.querySelector('.video-list');
const searchInput = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')
const categoryBox = document.querySelector(".category-box")
const categoryList = document.querySelectorAll(".categoryBtn")


searchInput.addEventListener('keypress',e=>{
    if(e.keyCode === 13){
        getSearchVideo();
    }
})


const getSearchVideo=async()=>{
    let keyword = searchInput.value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&type=video&key=${API_KEY}`
    let response = await fetch(url) ;
    let videoData = await response.json() ;
    videoDataBox=videoData.items;
    console.log(videoDataBox)
    categoryList.forEach((e)=>{
        e.classList.remove('on')
    })
    render()

}
const videoList = async () => {
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`
    let response = await fetch(url) ;
    let videoData = await response.json() ;
    videoDataBox=videoData.items;
    console.log(videoDataBox)
    render()
}
const render = () => {
    let videoResult = '' ;
    videoResult=videoDataBox.map((item)=>{
        return `<div class="video-item">
                    <div class="thum-img">
                        <img src=${item.snippet.thumbnails.medium.url} alt="" />
                    </div>
                    <div class="video-txt">
                        <h2> ${item.snippet.title}</h2>
                        <h3> ${item.snippet.channelTitle}</h3>
                    </div>
                </div>`
     }).join("")
     videoListBox.innerHTML = videoResult;
}
const getCategoryList=async(e)=>{
    let category = e.target.dataset.categoryname;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${category}&type=video&key=${API_KEY}`
    let response = await fetch(url) ;
    let videoData = await response.json() ;
    videoDataBox=videoData.items;
    console.log(videoDataBox)

    render()
    selectBtnUpdate(e.target)

}
videoList();

searchBtn.addEventListener('click', getSearchVideo)

categoryList.forEach(ele=>{
    ele.addEventListener('click',getCategoryList)
})


let selectBtnUpdate = (ele) =>{
    categoryList.forEach((e)=>{
        e.classList.remove('on')
    })
    ele.classList.add('on')
}
// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&type=video&key=${API_Key}

/* GET https://youtube.googleapis.com/youtube/v3/
videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
 */
