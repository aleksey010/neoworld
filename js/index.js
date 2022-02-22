
btn = document.querySelector(".button-connect");
btn.addEventListener('click', e => {
    document.querySelector(".error-container").classList = document.querySelector(".error-container").classList + ' active'
  
    setTimeout(function(){
        document.querySelector(".error-container").classList = 'error-container'
    }, 3000)
  
})