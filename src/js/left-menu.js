let leftMenu = document.querySelector('.left-menu');
let burgerButton = document.querySelectorAll('.round-icon-list-left-burger');
let buttonsCross = leftMenu.querySelectorAll('.buttons-cross');
let non = document.querySelector('.non');
let rightMenuCall = document.querySelector('.right-menu-call');
let rightMenuFeedback = document.querySelector('.right-menu-feedback');
let bodyHidden = document.querySelector('.body');

non.onclick = function() {
    if ( non.classList.contains('non-hidden')){
        leftMenu.classList.remove('left-menu-hidden');
        non.classList.remove('non-hidden')
        
       
    }
        else{
            leftMenu.classList.add('left-menu-hidden');
            non.classList.add('non-hidden')
            rightMenuCall.classList.add('right-menu-call-hidden')
            rightMenuFeedback.classList.add('right-menu-feedback-hidden');
            bodyHidden.classList.remove('desk-hidden');
           
        };          
} 




let openModal = function(){
    
    if(leftMenu.classList.contains('left-menu-hidden')){

        leftMenu.classList.remove('left-menu-hidden');
        non.classList.remove('non-hidden')
        bodyHidden.classList.add('desk-hidden');
        

        } else {
                leftMenu.classList.add('left-menu-hidden');
                non.classList.add('non-hidden')
                rightMenuCall.classList.add('right-menu-call-hidden')
                rightMenuFeedback.classList.add('right-menu-feedback-hidden');
                bodyHidden.classList.remove('desk-hidden');
            };        
        }  
        

        burgerButton[0].onclick = openModal;
    
        buttonsCross[0].onclick = openModal;
   
   


