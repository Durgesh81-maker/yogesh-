const reels = [
  {
    username: "coder_durgesh",
    likeCount: 1240,
    isLiked: false,
    commentCount: 132,
    caption: "Late night coding vibes 💻✨",
    video: "./1.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 48,
    isFollowed: true
  },
  {
    username: "tech_guru",
    likeCount: 980,
    isLiked: true,
    commentCount: 76,
    caption: "Technology never stops evolving 🚀",
    video: "./2.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 29,
    isFollowed: false
  },
  {
    username: "webdev_raj",
    likeCount: 2150,
    isLiked: false,
    commentCount: 243,
    caption: "HTML • CSS • JavaScript ❤️",
    video: "./11970306_2160_3840_60fps.mp4",
    userProfile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    shareCount: 81,
    isFollowed: true
  },
  {
    username: "frontend_queen",
    likeCount: 3420,
    isLiked: true,
    commentCount: 410,
    caption: "Frontend is not easy, but it's fun ✨",
    video: "./4.mp4",
    userProfile: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    shareCount: 125,
    isFollowed: true
  },
  {
    username: "js_master",
    likeCount: 1785,
    isLiked: false,
    commentCount: 196,
    caption: "JavaScript runs the world 😎",
    video: "./5.mp4",
    userProfile: "https://images.unsplash.com/photo-1678286742832-26543bb49959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    shareCount: 54,
    isFollowed: false
  },
  {
    username: "react_rider",
    likeCount: 2905,
    isLiked: true,
    commentCount: 338,
    caption: "React life ⚛️🔥",
    video: "./6.mp4",
    userProfile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    shareCount: 102,
    isFollowed: true
  },
  {
    username: "code_with_amit",
    likeCount: 865,
    isLiked: false,
    commentCount: 63,
    caption: "One day at a time ⏳",
    video: "./7.mp4",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    shareCount: 19,
    isFollowed: false
  },
  {
    username: "uiux_ninja",
    likeCount: 1970,
    isLiked: true,
    commentCount: 221,
    caption: "Design meets usability 🎨",
    video: "./8.mp4",
    userProfile: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 69,
    isFollowed: true
  },
  {
    username: "logic_builder",
    likeCount: 1448,
    isLiked: false,
    commentCount: 182,
    caption: "Think. Build. Improve 🧠",
    video: "./9.mp4",
    userProfile: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    shareCount: 41,
    isFollowed: false
  },
  {
    username: "dev_life_101",
    likeCount: 3250,
    isLiked: true,
    commentCount: 510,
    caption: "Eat • Code • Sleep • Repeat 🔁",
    video: "./10.mp4 ",
    userProfile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    shareCount: 158,
    isFollowed: true
  }
];
var sum = ''
var allreels = document.querySelector(".all-reels")




function adddata() {
  

reels.forEach(function(elem,idx){
  sum = sum +`   <div class="reel">
               <video autoplay loop muted src="${elem.video}"></video>
                <div class="bottom">
                  <div class="user">
                        <img class="pic2" src="${elem.userProfile}" alt="">
                        <h3>${elem.username} </h3>
                        <button>${elem.isFollowed?'UNFOLLOW':'FOLLOW'}</button>
                   
            
                  </div>

                 <p>${elem.caption}</p>
                </div>
                <div class="right">
                <div id="${idx}" class="like">
                    <h3 class="like-icon">${elem.isLiked?'<i  class="love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h3>
                    <h6>${elem.likeCount}</h6> </div>
                     <div class="comment">
                    <h3 class="comment-icon"><i class="ri-chat-1-line"></i> </h3>
                    <h6>${elem.commentCount}</h6>
                </div>
                <div class="share">
                    <h3 class="share-icon"><i class="ri-send-ins-line"></i> </h3>
                    <h6>${elem.shareCount}
              </h6></div>
                     <div class="download">
                    <h3 class="download"><i class="ri-more-2-fill"></i>  </h3>
                  
                </div>
                
                
            </div>

        </div>
             
`

})

allreels.innerHTML = sum
}
adddata()
allreels.addEventListener('click',function(dets){
  reels[dets].likeCount++



  adddata()
  

})

