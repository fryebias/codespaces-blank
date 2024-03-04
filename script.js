let submit = document.querySelector(".submit");
let txt = document.querySelector(".txt");
let leon = document.querySelector(".Leon");
let ada = document.querySelector(".Ada");
let sherry = document.querySelector(".Sherry");
let jake = document.querySelector(".Jake");
let chris = document.querySelector(".Chris");
let piers = document.querySelector(".Piers");
let hunk = document.querySelector(".Hunk");
let helena = document.querySelector(".Helena");
let rslts = document.querySelector(".rslts")



submit.addEventListener("click",function() {
let q1i = document.querySelector(".q1i").value;
console.log(q1i)
let q2i = document.querySelector(".q2i").value;
let q3i = document.querySelector(".q3i").value;
if(q1i < 16 && q2i === "Pessimist" && q3i === "Originals") {
    leon.style.display="block";
    rslts.style.display="none";
    ada.style.display="none";
    sherry.style.display="none";
piers.style.display="none";
chris.style.display="none";
helena.style.display="none";
hunk.style.display="none";
jake.style.display="none";



}


});


submit.addEventListener("click",function() {
    let q1i = document.querySelector(".q1i").value;
    console.log(q1i)
    let q2i = document.querySelector(".q2i").value;
    let q3i = document.querySelector(".q3i").value;
    if(q1i < 16 && q2i === "Pessimist" && q3i === "Remakes") {
        ada.style.display="block";
    rslts.style.display="none";
    sherry.style.display="none";
piers.style.display="none";
chris.style.display="none";
helena.style.display="none";
hunk.style.display="none";
jake.style.display="none";
leon.style.display="none";
    
    
    }
    
    
    });

    submit.addEventListener("click",function() {
    let q1i = document.querySelector(".q1i").value;
    console.log(q1i)
    let q2i = document.querySelector(".q2i").value;
    let q3i = document.querySelector(".q3i").value;
    if(q1i < 16 && q2i === "Optimist" && q3i === "Originals") {
        sherry.style.display="block";
    rslts.style.display="none";
    piers.style.display="none";
chris.style.display="none";
helena.style.display="none";
hunk.style.display="none";
jake.style.display="none";
leon.style.display="none";
ada.style.display="none"
    
    
    }
    
    
    });

    
    submit.addEventListener("click",function() {
        let q1i = document.querySelector(".q1i").value;
        console.log(q1i)
        let q2i = document.querySelector(".q2i").value;
        let q3i = document.querySelector(".q3i").value;
        if(q1i < 16 && q2i === "Optimist" && q3i === "Remakes") {
            piers.style.display="block";
        rslts.style.display="none";
        chris.style.display="none";
        helena.style.display="none";
        hunk.style.display="none";
        jake.style.display="none";
        leon.style.display="none";
        ada.style.display="none"
        sherry.style.display="none";
        
        
        }
        
        
        });
    
        submit.addEventListener("click",function() {
            let q1i = document.querySelector(".q1i").value;
            console.log(q1i)
            let q2i = document.querySelector(".q2i").value;
            let q3i = document.querySelector(".q3i").value;
            if(q1i >= 16 && q2i === "Pessimist" && q3i === "Originals") {
                chris.style.display="block";
            rslts.style.display="none";
            piers.style.display="none";
            helena.style.display="none";
            hunk.style.display="none";
            jake.style.display="none";
            leon.style.display="none";
            ada.style.display="none"
            sherry.style.display="none";
            
            
            }
            
            
            });

            submit.addEventListener("click",function() {
                let q1i = document.querySelector(".q1i").value;
                console.log(q1i)
                let q2i = document.querySelector(".q2i").value;
                let q3i = document.querySelector(".q3i").value;
                if(q1i >= 16 && q2i === "Pessimist" && q3i === "Remakes") {
                    helena.style.display="block";
                rslts.style.display="none";
                chris.style.display="none";
                piers.style.display="none";
                hunk.style.display="none";
                jake.style.display="none";
                leon.style.display="none";
                ada.style.display="none"
                sherry.style.display="none";
                
                
                }
                
                
                });

                submit.addEventListener("click",function() {
                    let q1i = document.querySelector(".q1i").value;
                    console.log(q1i)
                    let q2i = document.querySelector(".q2i").value;
                    let q3i = document.querySelector(".q3i").value;
                    if(q1i >= 16 && q2i === "Optimist" && q3i === "Originals") {
                        hunk.style.display="block";
                    rslts.style.display="none";
                    chris.style.display="none";
                    piers.style.display="none";
                    helena.style.display="none";
                    jake.style.display="none";
                    leon.style.display="none";
                    ada.style.display="none"
                    sherry.style.display="none";
                    
                    
                    }
                    
                    
                    });

                    submit.addEventListener("click",function() {
                        let q1i = document.querySelector(".q1i").value;
                        console.log(q1i)
                        let q2i = document.querySelector(".q2i").value;
                        let q3i = document.querySelector(".q3i").value;
                        if(q1i >= 16 && q2i === "Optimist" && q3i === "Remakes") {
                            jake.style.display="block";
                        rslts.style.display="none";
                        chris.style.display="none";
                        piers.style.display="none";
                        helena.style.display="none";
                        hunk.style.display="none";
                        leon.style.display="none";
                        ada.style.display="none"
                        sherry.style.display="none";
                        
                        
                        }
                        
                        
                        });