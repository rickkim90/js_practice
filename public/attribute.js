var btn = document.getElementById('setAttribute');
// $('#setAttribute')
console.log(btn);
btn.onclick = function() {
   console.log("button!!!");
   setWidth();
}

function setWidth() {
    var tb = document.getElementById('myTable');
    var size = prompt("원하는 사이즈를 입력해보세요..");
    console.log(size);
    tb.setAttribute('style', 'width: ' + size + '%;');
}
