const body = document.querySelector('body');
const dropDown1 = document.querySelector('.add');
const dropDown2 = document.querySelector('#avatar-photo'); 
const drop1 = document.querySelector('.dropdown-1');
const drop2 = document.querySelector('.dropdown-2');
const footerYear = document.getElementById('footer-year');
const themeToggler = document.querySelectorAll('.theme-toggle');

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header-left-actions').classList.add('hide-nav');
})

// toggle nav-list
const navToggle = document.querySelector('.hamburger-menu');
const linksContainer = document.querySelector('.header-container')
navToggle.addEventListener('click', function(){
    if(!linksContainer.classList.contains('open-header')){
        linksContainer.classList.add('open-header');
        document.querySelector('.header-left-actions').classList.remove('hide-nav');
    } else {
        linksContainer.classList.remove('open-header');
        document.querySelector('.header-left-actions').classList.add('hide-nav');
    } 
})

// toggle dropDowns
body.addEventListener('click', function(e){
    if(e.target.parentElement.parentElement.classList.contains('add_container') || e.target.parentElement.classList.contains('add-icon') || e.target.parentElement.classList.contains('octicon')){
        drop1.classList.toggle('open-1');
    } else {
        drop1.classList.remove('open-1');
    }

    if(e.target.parentElement.classList.contains('header-avatar')){
        drop2.classList.toggle('open-2');
    } else {
        drop2.classList.remove('open-2');
    }
})

// fixed dashboard
window.addEventListener('scroll', function(){
    const DashBoard = document.querySelector('.dash-hidden');
    const DashBoardHeight = DashBoard.getBoundingClientRect().height;
    const DashBoardSmall = document.querySelector('#small-dash');
    const offset = window.pageYOffset;

    if(offset > 99){
        DashBoard.classList.add('dashboardFix');
        DashBoard.style.paddingTop = '10px';
    } else {
        DashBoard.classList.remove('dashboardFix');
        DashBoard.style.paddingTop = '40px';
    }

    if(offset >= 299){
        DashBoardSmall.classList.add('dashboardSmallFix');
        DashBoardSmall.style.paddingTop = '10px';
        document.querySelector('.dashboard-profile-avatar').classList.add('show-profile-avatar');
    } else {
        DashBoardSmall.classList.remove('dashboardSmallFix');
        DashBoardSmall.style.paddingTop = 'initial';
        document.querySelector('.dashboard-profile-avatar').classList.remove('show-profile-avatar');
    }
})


// dark theme
themeToggler.forEach(function(themeTogglerOne){
    themeTogglerOne.addEventListener('click', function(){
        document.body.classList.toggle('dark_mode');
    
        function themeTogglerSlide(){
            if(themeTogglerOne.classList.contains('slide')){
                themeTogglerOne.classList.remove('slide');
                } else {
                themeTogglerOne.classList.add('slide');
                }
        } 
    
        themeTogglerSlide();
    
        if (body.classList.contains('dark_mode') || themeTogglerOne.classList.contains('slide')){
            localStorage.setItem('website_theme', 'dark_mode');
            localStorage.setItem('toggle_slide', 'slide');
        } else {
            localStorage.setItem('website_theme', 'default');
            localStorage.setItem('toggle_slide', 'default');
        }
    })
})

function getWebsiteTheme (){
    let currentTheme = localStorage.getItem('website_theme');
    const togglePosition = localStorage.getItem('toggle_slide');
    if(currentTheme != null || togglePosition != null){
        body.classList.remove('default', 'dark_mode');
        body.classList.add(currentTheme);

        themeToggler.forEach(function(themeTogglerOne){
            themeTogglerOne.classList.remove('default', 'slide');
            themeTogglerOne.classList.add(togglePosition);
        })
    }
}

getWebsiteTheme();

window.addEventListener('storage', function(){
    getWebsiteTheme();
}, false)

// footer year auto update
footerYear.innerHTML = new Date().getFullYear();