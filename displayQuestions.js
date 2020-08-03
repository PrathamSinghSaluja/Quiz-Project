
var score=0;
var total=10;
var point=1;
var highest=total * point;


function init(){
    sessionStorage.setItem('a1','a');
    sessionStorage.setItem('a2','c');
    sessionStorage.setItem('a3','d');
    sessionStorage.setItem('a4','d');
    sessionStorage.setItem('a5','b');
    sessionStorage.setItem('a6','a');
    sessionStorage.setItem('a7','a');
    sessionStorage.setItem('a8','c');
    sessionStorage.setItem('a9','c');
    sessionStorage.setItem('a10','c');
}

$ (document).ready(function(){
    $('.questionForm').hide();

    $('#q1').show();

    $('.questionForm #submit').click(function(){

        current = $(this).parents('form:first').data("question");
        next = $(this).parents('form:first').data("question")+1;

        $('.questionForm').hide();
        $('#q'+next+'').fadeIn(300);
        process(''+current+'');
        return false
    });
});

function process(n){
    var submitted = $('input[name=q'+n']:checked').val();
        if(submitted == sessionStorage.getItem('a'+n+'')){
            score = score + point;
        }
}

if(n == total){
    $('results').html('<h2>Final Score : '+score+'out of '+highest+'</h2>');

    if(score >= highest/2){
        $('#results').append('<center><p style="background-color:#81ff8ebf;">pass</p></center><br><center><button><a href="index.html">Take again</a></button></center>');
     }else{
        $('#results').append('<center><p style="background-color:#ff8181bf">faild!!</p></center><br><center><button><a href="index.html">Take again</a></button></center>');
      }
        
    
    return false;
}

window.addEventListener('load',init,false);
