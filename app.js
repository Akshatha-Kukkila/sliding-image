(function(){
    const pictures = [
        "1","2","3","4","5","6","7","8","9","10","11","12"

    ];
    const buttons = document.querySelectorAll('.btn')
    const imgDiv = document.querySelector(".img-container")
    let counter = 0
    buttons.forEach(function(btn){
        btn.addEventListener('click', function(e){
            if(btn.classList.contains('btn-left')){
                counter--
            
            if(counter<0){
                counter=pictures.length-1
            }
            imgDiv.computedStyleMap.background = `url('img/${pictures[counter]}.jpeg')`
        }
        if(btn.classList.contains('btn-right')){
            counter++
        
        if(counter> pictures.length-1){
            counter=0
        }
        imgDiv.computedStyleMap.background = `url('img/${pictures[counter]}.jpeg')`
    }
        })
    })







})()