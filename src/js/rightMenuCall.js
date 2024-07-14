let roundIconTabletCall = document.querySelectorAll('.round-icon-call');
let rightMenuCall = document.querySelector('.right-menu-call');
let buttonsCross = rightMenuCall.querySelectorAll('.buttons-cross');
let non = document.querySelector('.non');
let rightMenuFeedback = document.querySelector('.right-menu-feedback');
let bodyHidden = document.querySelector('.body');

    let open = function(){
        if (rightMenuCall.classList.contains('right-menu-call-hidden')){
            rightMenuCall.classList.remove('right-menu-call-hidden')
            
            non.classList.remove('non-hidden');
            
        }
            else{
                rightMenuCall.classList.add('right-menu-call-hidden');
                non.classList.add('non-hidden');

                
            };        
        }  
        let openCallBurger768 = function(){
            if (rightMenuCall.classList.contains('right-menu-call-hidden')){
                rightMenuCall.classList.remove('right-menu-call-hidden')
                
                rightMenuFeedback.classList.add('right-menu-feedback-hidden');
            }
                else{
                    rightMenuCall.classList.add('right-menu-call-hidden');
                    
                    rightMenuFeedback.classList.add('right-menu-feedback-hidden');
                };        
            }  

        let openCallBurger1440 = function(){
            if (rightMenuCall.classList.contains('right-menu-call-hidden')){
                rightMenuCall.classList.remove('right-menu-call-hidden')

                rightMenuFeedback.classList.add('right-menu-feedback-hidden');
                non.classList.remove('non-hidden');

                bodyHidden.classList.add('desk-hidden');
            }
                else{
                    rightMenuCall.classList.add('right-menu-call-hidden');
                    
                    rightMenuFeedback.classList.add('right-menu-feedback-hidden');

                    non.classList.add('non-hidden');

                    bodyHidden.classList.remove('desk-hidden');
                };        
            }  
            
        roundIconTabletCall[0].onclick = open;

        if(window.innerWidth >= 768){
        roundIconTabletCall[1].onclick = openCallBurger768;
        }else{roundIconTabletCall[1].onclick = open;

        }

        if(window.innerWidth >= 1440){
            roundIconTabletCall[1].onclick = openCallBurger1440;
            }

            window.addEventListener('resize', () => {
                if(window.innerWidth >= 768){
                    roundIconTabletCall[1].onclick = openCallBurger768;
                    }
                    if(window.innerWidth >= 1440){
                        roundIconTabletCall[1].onclick = openCallBurger1440;
                        }
              })


       // buttonsCross[0].onclick = open;
        
        