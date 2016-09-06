
    var link = document.querySelector(".research_hotels");
    var form = document.querySelector(".research");
            

    link.addEventListener("click", function(event) {
    event.preventDefault();
    form.style.display = (form.style.display == "block") ? "none" : "block"
   }); 

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            form.style.display = "none";
          }
    });
