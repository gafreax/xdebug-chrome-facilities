document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn_phpstorm_start").addEventListener("click",startPhpStorm);
    document.getElementById("btn_phpstorm_stop").addEventListener("click",stopPhpStorm);
});
function startPhpStorm() {  
    document.cookie='XDEBUG_SESSION='+'PHPSTORM'+';path=/;';
    window.close();
}
function stopPhpStorm() {
    document.cookie='XDEBUG_SESSION='+''+';expires=Mon, 05 Jul 2000 00:00:00 GMT;path=/;';
    window.close();
}


