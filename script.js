const btns = document.querySelectorAll(".btn");
const squres = document.querySelectorAll(".squre");

let a = document.createElement("div");
a.classList.toggle("clicked");

document.addEventListener("click", function (e) {
    if (e.target.classList[1] == "btn") {
        if (e.target.classList[0] == "btn-1") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[0].classList.toggle("clicked");
            squres[0].classList.toggle("olutlined");
        }
        
        else if (e.target.classList[0] == "btn-2") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[1].classList.toggle("clicked");
            squres[squres.length-1].classList.toggle("olutlined");
        }
        
        else if (e.target.classList[0] == "btn-3") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[2].classList.toggle("clicked");
            squres[1].classList.toggle("olutlined");
        }
        
        else if (e.target.classList[0] == "btn-4") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[3].classList.toggle("clicked");
            squres[squres.length-2].classList.toggle("olutlined");
        }
        
        else if (e.target.classList[0] == "btn-5") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[4].classList.toggle("clicked");
            for (let i = 0; i < squres.length; i++) {
                if (i % 2 == 0) {
                    squres[i].classList.toggle("olutlined");
                }
            }
        }
        
        else if (e.target.classList[0] == "btn-6") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[5].classList.toggle("clicked");
            for (let i = 0; i < squres.length; i++) {
                if (i % 2 != 0) {
                    squres[i].classList.toggle("olutlined");
                }
            }
        }
        
        else if (e.target.classList[0] == "btn-7") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[6].classList.toggle("clicked");
            for (let i = 3; i < squres.length; i++) {
                squres[i].classList.toggle("olutlined");
            }
        }
        
        else if (e.target.classList[0] == "btn-8") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[7].classList.toggle("clicked");
            for (let i = 1; i < squres.length;) {
                squres[i].classList.toggle("olutlined");
                i+=3;
            }
        }
        
        else if (e.target.classList[0] == "btn-9") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[8].classList.toggle("clicked");
            for (let i = 0; i < squres.length;) {
                squres[i].classList.toggle("olutlined");
                i+=3;
            }
        }
        
        else if (e.target.classList[0] == "btn-10") {
            removeClassFromAll();
            removeClassFromAllSqures()
            btns[9].classList.toggle("clicked");
            for (let i = 3; i < squres.length;) {
                squres[i].classList.toggle("olutlined");
                i+=4;
            }
        }
    }
});

function removeClassFromAll() {
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("clicked")) {
            btns[i].classList.remove("clicked");
        }
    }
}
function removeClassFromAllSqures(){
    for (let i = 0; i < squres.length; i++) {
        if (squres[i].classList.contains("olutlined")) {
            squres[i].classList.remove("olutlined");
        }
    }
}
