var button1 = document.getElementById('alertButton1'),
    button2 = document.getElementById('alertButton2');

// anonymous callback
button1.addEventListener('click', function(){
    alert('(ノಠ益ಠ)ノ彡┻━┻');
});

// named callback
function adventureTime() {
    alert('ʕ •̀ o •́ ʔ');
}
button2.addEventListener('click', adventureTime);

