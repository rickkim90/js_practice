# 4차산업혁명 선도인재 양성 프로젝트 과정

---
## 1. Week 1 Day 16:   

***



1. 캐멀케이스
2. 스네이크케이스
3. 헝가리언케이스




html

head body

title meta

link



### Javascript

gem 'bootstrap-sass'

/app/assets/stylesheets/application.css -> /app/assets/stylesheets/application.scss



Q. 오늘 출석한 사람중에서 가장 키가 큰 사람은?

1. 배열을 만든다. 배열에 모든 사람의 키를 입력한다.
2. 첫번째 사람의 키를 알아낸다. 이 사람이 가장 큰 사람이라고 가정한다.
3. 두번쨰사람.. 세번째사람.. 돌면서 가장 큰 사람과의 키를 비교한다
4. 가장 큰 사람보다 더 큰 사람이 나타나면 그 사람이 가장 큰 사람이라고 다시 가정한다
5. 모든 사람의 키를 비교하면 가장 큰 사람의 키를 알 수 있다.




Q. 홈페이지에 가입할 때 아이디 중복체크 하는 과정

1. 아이디를 폼에 입력한다
2. 중복확인 버튼(이벤트 리스너) 을 클릭한다. (이벤트)
3. alert (폼이 빈칸이니?) 안내메시지 출력 (메소드)
4. alert(빈칸이 아니니?) DB에 쿼리를 날린다.
5. row가 존재 하는지 확인한다.
6. 결과값을 출력한다



##### Console

console.log("hi");

window

location

document

location.href;

location.replace("https://google.com")



public에서 생성해야

src = "./come.js" 불러오기 가능



#### id로 지정

```javascript
<button id="setTitle">SetTitle</button>
<button id="setClass">SetClass</button>
```



 Q. 모든 타이틀 들을 내가 원하는 이름으로 바꾸기
 (버튼을 눌렀을때)

1. 버튼을 누른다


2. 타이틀에 해당하는 html element들을 가져온다. (변수에 담는다)


3. 각각을 순환하며 내용물을 바꾼다.

```javascript
function setTitle() {
    var titles = document.getElementsByClassName('title');
    for(var i = 0; i < titles.length; i++) {
        titles[i].innerHTML = "배가 아프다...";
    }
}
// HTML 문서 로드 후 javascript 로드

// 익명함수
// var btn = document.getElementsByTagName('button')[0];
var btn = document.getElementById('setTitle');
btn.onclick = function() {
    alert("Done");
    setTitle();
}
```

변수에 담은 method 선언되지 않은데 실행하면 실행되지않음

변수 선어 function 함수 {}



##### Javascript로 HTML내용물 가져오기

```javascript
document.getElementsById(ID명);
document.getElementsByClassName(classa명);
document.getElementsByTagName(Tag명);
document.querySelectorAll(css Selector);
```



##### 스포츠가 영원히 고통받는 네이버로 변경

```javascript
var el = document.getElementsByClassName('tnb_link');

for(var i = 0; i < el.length; i++) {
    el[i].innerHTML = "영원히 고통받는 네이버";
}
```



##### /public/class.js

Q. 버튼을 눌렀을 때, table 태그에 class를 추가/삭제한다.

1. 버튼을 누른다.

1-1. 버튼 요소를 가지고 온다.

1-2. 버튼 요소에 eventListener(click)를 달아준다.

1-3. 버튼을 눌렀을때 실행 시킬 method를 포함한다.

2. table태그 요소를 가지고 온다.
3. table태그에 내가 원하는 class(table-hover)가 있는지 확인한다

3-1. class가 있으면 뺀다

3-2. class가 없으면 넣는다.

```javascript
var btn = document.getElementById('setClass');
console.log(btn);
btn.onclick = function() {
   console.log("button!!!");
   toggleClass();
}
function toggleClass() {
    var tb = document.getElementsByClassName("table")[0];
    tb.classList.toggle('table-hover');
}
```



##### /public/attribute.js

Q. table의 크기를 내가 원하는 만큼으로 설정하기.

style width -> 그때그떄 원하는 만큼으로..

1. 버튼을 누른다.

1-1. 버튼 요소를 가지고 온다.

1-2. 버튼 요소에 eventListener(click)를 달아준다.

1-3. 버튼을 눌렀을때 실행 시킬 method를 포함한다.

2. table태그 요소를 가지고 온다.

2-1. prompt창을 띄운다

2-2. prompt창에 내가 원하는 사이즈를 입력한다

2-3. table의 style속성 중 width속성을 바꾼다.



$(document).on('ready', function)



#### jquery

```javascript
$(function() {
    // alert("done");
    $('#post_title').val("제이쿼리 재밌다.");
    $('#post_title').on('change', function(){
        var text = $('#post_title').val();
        // console.log(text);
        alert(text);
    })
});
```



Q. post_title의 내용물이 바뀌면 alert를 통해 내용물을 확인한다.

1. post_title 요소를 가지고 온다.

1-1. 요소에 onChangeListener를 달아준다.

1-2. 요소의 바뀐 값을 추출한다.

1-3. 값을 변수에 저장한다.

2. 변수에 저장된 값을 alert한다.