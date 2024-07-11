let rightMenuFeedback = document.querySelector('.right-menu-feedback');
let roundIconTabletChat = document.querySelectorAll('.round-icon-tablet--chat');
let buttonsCross = rightMenuFeedback.querySelectorAll('.buttons--cross');
let non = document.querySelector('.non');


    let open = function(){
        if (rightMenuFeedback.classList.contains('right-menu-feedback-hidden')){
            
            rightMenuFeedback.classList.remove('right-menu-feedback-hidden')
            non.classList.remove('non-hidden');
            
        }
            else{
                rightMenuFeedback.classList.add('right-menu-feedback-hidden');
                non.classList.add('non-hidden');
            };        
        }  
        
    
        roundIconTabletChat[0].onclick = open;
        roundIconTabletChat[1].onclick = open;
       
        buttonsCross[0].onclick = open;
       