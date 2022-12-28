let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar-section')
let videopage= document.querySelector('.video-page')

menu.onclick = function(){
    sidebar.classList.toggle('small-sidebar')
    videopage.classList.toggle('large-video')
}


console.log(menu)