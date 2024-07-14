let rightMenuFeedback = document.querySelector('.right-menu-feedback');
let roundIconTabletChat = document.querySelectorAll('.round-icon-chat');
let buttonsCross = document.querySelectorAll('.buttons-cross');
let non = document.querySelector('.non');
let rightMenuCall = document.querySelector('.right-menu-call');
let leftMenu = document.querySelector('.left-menu');
let bodyHidden = document.querySelector('.body');

    let open = function(){
        if (rightMenuFeedback.classList.contains('right-menu-feedback-hidden')){
            
            rightMenuFeedback.classList.remove('right-menu-feedback-hidden')
            non.classList.remove('non-hidden');

            bodyHidden.classList.add('desk-hidden'); 
                     
            
        }
            else{
                rightMenuFeedback.classList.add('right-menu-feedback-hidden');
                non.classList.add('non-hidden');
                
                bodyHidden.classList.remove('desk-hidden');
            };        
        }  


        let openFeedbackBurger768 = function(){
            if (rightMenuFeedback.classList.contains('right-menu-feedback-hidden')){
                rightMenuFeedback.classList.remove('right-menu-feedback-hidden')

                rightMenuCall.classList.add('right-menu-call-hidden');
                
                bodyHidden.classList.add('desk-hidden'); 
                
            } 
                else{
                    rightMenuFeedback.classList.add('right-menu-feedback-hidden');

                    rightMenuCall.classList.add('right-menu-call-hidden');
                    bodyHidden.classList.remove('desk-hidden');          
                };        
            }  


        let openFeedbackBurger1440 = function(){
            if (rightMenuFeedback.classList.contains('right-menu-feedback-hidden')){
                rightMenuFeedback.classList.remove('right-menu-feedback-hidden')

                rightMenuCall.classList.add('right-menu-call-hidden');

                non.classList.remove('non-hidden');
                bodyHidden.classList.add('desk-hidden'); 
                
            } 
                else{
                    rightMenuFeedback.classList.add('right-menu-feedback-hidden');

                    rightMenuCall.classList.add('right-menu-call-hidden');
                    
                    non.classList.add('non-hidden');
                    bodyHidden.classList.remove('desk-hidden'); 

                };        
            }  
            


        roundIconTabletChat[0].onclick = open;
        
        
        if(window.innerWidth >= 768){
            roundIconTabletChat[1].onclick = openFeedbackBurger768;
        }else{
            roundIconTabletChat[1].onclick = open;

        }

        if(window.innerWidth >= 1440){
            roundIconTabletChat[1].onclick = openFeedbackBurger1440;
            }  


        window.addEventListener('resize', () => {
            if(window.innerWidth >= 768){
                roundIconTabletChat[1].onclick = openFeedbackBurger768;
            }
            if(window.innerWidth >= 1440){
                roundIconTabletChat[1].onclick = openFeedbackBurger1440;
                }
          })
          
          
    

        //buttonsCross[0].onclick = open;
       

        let cross = function(){
            leftMenu.classList.add('left-menu-hidden');
            non.classList.add('non-hidden')
            rightMenuCall.classList.add('right-menu-call-hidden')
            rightMenuFeedback.classList.add('right-menu-feedback-hidden');
            bodyHidden.classList.remove('desk-hidden');

        }
        buttonsCross[0].onclick = cross;
        buttonsCross[1].onclick = cross;
        buttonsCross[2].onclick = cross;
        
          
        