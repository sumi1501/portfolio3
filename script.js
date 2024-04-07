var tabLink = document.getElementsByClassName('tab-link');
        var tabContent = document.getElementsByClassName('tab-content');

        function opentab(tabname){
            for(tabLinks of tabLink){
                tabLinks.classList.remove("active-link");
            }
            for(tabContents of tabContent){
                tabContents.classList.remove("active-tab");
            }
            event.currentTarget.classList.add('active-link');
            document.getElementById(tabname).classList.add('active-tab');
        }

var side = document.getElementById('side');
function openmenu(){
    side.style.right= '0';

}
function closemenu(){
    side.style.right= '-200px';

}