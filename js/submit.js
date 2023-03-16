// JavaScript Document
$(document).ready(function(){//都要包在這個裡面

    // 這些是 choose file 時會動態更改旁邊的黨名
    const actualBtn = document.getElementById('actual-btn');
    const fileChosen = document.getElementById('file-chosen');
    actualBtn.addEventListener('change', function(){
        fileChosen.textContent = this.files[0].name
    })
});
