$(function() {
    // alert("done");
    $('#post_title').val("제이쿼리 재밌다.");
    $('#post_title').on('change', function(){
        var text = $('#post_title').val();
        // console.log(text);
        alert(text);
    })
});