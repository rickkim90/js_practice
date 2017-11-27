var btn = document.getElementById('setClass');
console.log(btn);
btn.onclick = function() {
   console.log("button!!!");
   toggleClass();
}
function toggleClass() {
    var tb = document.getElementsByClassName("table")[0];
    // console.log(tb.classList);
    // if(tb.classList.contains('table-hover')){
    //     tb.classList.remove('table-hover');
    // } else {
    //     tb.classList.add('table-hover');
    // }
    tb.classList.toggle('table-hover');
}
