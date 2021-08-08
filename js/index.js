let nav_items = document.querySelectorAll(".nav-tabs .nav-item");
let contests = document.querySelectorAll("section.contests");
let navbar_items = document.querySelectorAll('.navbar-nav li a')



navbar_items.forEach(item => {
    item.addEventListener('click', ()=>{
        navbar_items.forEach(element => {
            element.classList.remove('active');
        });
        item.classList.add('active');
    })
});


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
})
