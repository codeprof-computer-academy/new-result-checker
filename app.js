const result = document.querySelector(".result-container")
let student_id_input = document.querySelector(".student_id")

// logic to display current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

// logic to display nav
// step1 : target the menu btn
const menu_btn = document.querySelector(".menu-btn")

// step2 :; target the nav
const nav_bar = document.querySelector("nav")

// step3: add click event listener to the menu btn
menu_btn.addEventListener("click", slide_out_nav)

// step 4: build the function that gets called when the menu btn is being cliecked
function slide_out_nav(event){
        //  add the utility class show-nav to the nav
        nav_bar.classList.toggle("show-nav")
        event.target.classList.toggle("change-menu-btn-bg")

}


// logic for theme ball slide
// step 1: target the theme-btn
const theme_btn = document.querySelector(".theme-btn")

// step2: target the theme ball
const theme_ball = document.querySelector(".theme-ball")

// step3: add click event listener to it
theme_btn.addEventListener("click", slide_theme_ball)


// step4: build the function that gets called
function slide_theme_ball(){
 
    //   toggle the utility class slide-theme-ball 
    theme_ball.classList.toggle("theme-ball-slide")
}

// logic to check result
// step1:  grab the check result form
const result_form = document.querySelector(".result-form")

// step2: add submit event to the form
result_form.addEventListener("submit", check_result)


//  step3: build the function that gets called when user submit form
function check_result(event){
    event.preventDefault()
    // grab the student id
    let student_id = (student_id_input.value).toUpperCase().trim()
   
    // find the student with the student_id grabbed above
    let student_found = students.find(function(person){
           return person.student_id === student_id
    })

   if(student_found){
        //   logic to display result

        let result_card = `
    
            <div class="result-body">
                        <img src="${student_found.profile_image}" alt="" width="60" class="profile-picture">

                        <div class="student-details">
                                <span>
                                    <small>Student ID.</small><small>${student_found.student_id}</small>
                                </span>
                                <span>
                                    <small>Firstname</small><small class="firstname">${student_found.first_name}</small>
                                </span>

                                <span>
                                    <small>Lastname</small><small class="lastname">${student_found.last_name}</small>
                                </span>

                                <span>
                                    <small>Othername</small><small>${student_found.other_name}</small>
                                </span>

                                 <span>
                                    <small>State</small><small>${student_found.state}</small>
                                </span>


                                <span>
                                    <small>Course</small><small>${student_found.course}</small>
                                </span>

                                <span>
                                    <small>Duration</small><small>${student_found.duration} months</small>
                                </span>
                                <span>
                                    <small>Average Score</small><small>${student_found.average_score}</small>
                                </span>

                                <span>
                                    <small>Gender</small><small>${student_found.gender}</small>
                                </span>

                                <span>
                                    <small>Status</small><small>${student_found.status}</small>
                                </span>

                                  <span>
                                    <small>Rating</small><small class="stars">
                                      
                                    </small>
                                </span>
                 </div>

                 <div class="result-call-to-actions">
                        <button> <img src="./images/print.png" alt="" width="20"> </button>
                        <button> <img src="./images/share.png" alt="" width="20"> </button>
                        <button> <img src="./images/download.png" alt="" width="20"> </button>
                        <button class="close-btn"> <img src="./images/close_result.png" alt="" width="20"> </button>
                       
                 </div>
            </div>

        
        `

      

        result.innerHTML = result_card
        result.style.display = "flex"
        result_form.style.display = "none"

        let star = ""
          for(let i=0; i<5; i++){
               if(student_found.average_score >= 90){
                    star = `<img src="./images/gold.png" width="10"/>`
                    document.querySelector(".stars").innerHTML += star
               }else if(student_found.average_score >= 80){
                     if(i < 4){
                          star = `<img src="./images/gold.png" width="10"/>`
                     }else{
                          star = `<img src="./images/silver.png" width="10"/>`
                     }

                     document.querySelector(".stars").innerHTML += star
               }else if(student_found.average_score >= 70){
                     if(i < 3){
                          star = `<img src="./images/gold.png" width="10"/>`
                     }else{
                          star = `<img src="./images/silver.png" width="10"/>`
                     }

                     document.querySelector(".stars").innerHTML += star
               }

               else if(student_found.average_score >= 60){
                     if(i < 2){
                          star = `<img src="./images/gold.png" width="10"/>`
                     }else{
                          star = `<img src="./images/silver.png" width="10"/>`
                     }

                     document.querySelector(".stars").innerHTML += star
               }

                  else if(student_found.average_score >= 50){
                     if(i < 1){
                          star = `<img src="./images/gold.png" width="10"/>`
                     }else{
                          star = `<img src="./images/silver.png" width="10"/>`
                     }

                     document.querySelector(".stars").innerHTML += star
               }else{
                     star = `<img src="./images/silver.png" width="10"/>`
                     document.querySelector(".stars").innerHTML += star
               }
             
             
             
             
        }

    
   }else{
         result.innerHTML = `
         <h1 class="no-result">Ooops! no result found for this student ID.</h1>
         <br>

           <div class="result-call-to-actions">
                     
                        <button class="close-btn"> <img src="./images/close_result.png" alt="" width="20"> </button>
                       
             </div>

         
         `
        result.style.display = "flex"
        result_form.style.display = "none"
   }


   
// Logic to close the result

document.querySelector(".close-btn").addEventListener("click", function(){
        result.style.display = "none"
        result_form.style.display = "flex"
        student_id_input.value = ""
})
}





