// Global Vars
let nav_items = document.querySelectorAll(".nav-tabs .nav-item");
let contests = document.querySelectorAll("section.contests");
let navbar_items = document.querySelectorAll('.navbar-nav li a')
let carousel_paragraph = document.getElementById('carousel-paragraph');
let carousel_heading = document.getElementById('carousel-modal-label');
let carousel_buttons = document.querySelectorAll('.carousel-item .btn');


// add/remove active class from navbar items
navbar_items.forEach(item => {
    item.addEventListener('click', ()=>{
        navbar_items.forEach(element => {
            element.classList.remove('active');
        });
        item.classList.add('active');
    })
});


// showing the timeline based on the clicked year
nav_items.forEach(item =>{
    item.addEventListener('click', (e)=>{
        if(!e.target.classList.contains('active')){
            let date = e.target.getAttribute('data-date');
            
            // removing the active class from the old element
            nav_items.forEach(element => {
                if(element.children[0].classList.contains('active')){
                    element.children[0].classList.remove('active');
                }
            })

            // showing the right year
            contests.forEach(contest => {
                // removing the wrong year
                contest.classList.remove('d-block')
                contest.classList.add('d-none')

                // showing the right year
                if(contest.getAttribute('data-date') === date){
                    contest.classList.remove('d-none')
                    contest.classList.add('d-block')
                }
            })
            
            // adding the active class to the chosen element
            e.target.classList.add('active');
        }
    });
});


// adding the text of the carousel slide to teh modal
carousel_buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        // getting the text from the heading and the paragraph in the carousel
        const paragraph = button.parentElement.previousElementSibling.innerHTML;
        const heading = button.parentElement.previousElementSibling.previousElementSibling.innerHTML;

        // adding the text to the carousel
        carousel_heading.innerHTML = heading;
        carousel_paragraph.innerHTML = paragraph;
    })
});
