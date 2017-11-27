// Q. 모든 타이틀 들을 내가 원하는 이름으로 바꾸기
// (버튼을 눌렀을때)
// 1. 버튼을 누른다
// 1-1. 버튼의 내용을 가져온다
// 1-2. 버튼의 onclickListener를 달아준다
// 1-3. 버튼을 눌렀을때 메소드를 실행시킨다.
// 2. 타이틀에 해당하는 html element들을 가져온다. (변수에 담는다)
// 3. 각각을 순환하며 내용물을 바꾼다.element

function setTitle() {
    var titles = document.getElementsByClassName('title');
    for(var i = 0; i < titles.length; i++) {
        titles[i].innerHTML = "배가 아프다...";
    }
}
// HTML 문서 로드 후 javascript 로드


// var btn = document.getElementsByTagName('button')[0];
var btn = document.getElementById('setTitle');

btn.onclick = function() {
    alert("Done");
    setTitle();
}

// 익명함수