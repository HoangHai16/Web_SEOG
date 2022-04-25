
const btnLights = document.querySelector(".header__icons-light");
const app = document.querySelector(".app");
const header = document.querySelector(".header")
const logo = document.querySelector('.logo p');
const navbar = document.querySelector(".navbar");
const iconSearch = document.querySelector('.header__search-icon');
const bannerHeading = document.querySelector('.banner__heading');
const bannerDesc = document.querySelector('.banner__desc');
const aboutHeading = document.querySelector('.about__heading');
const aboutDesc = document.querySelector('.about__desc');
const featureHeading = document.querySelector('.feature__heading');
const featureBoxTitles = document.getElementsByClassName('feature-box__title');
const featureBoxDescs = document.getElementsByClassName('feature-box__desc');
const analysisHeading = document.querySelector('.analysis__heading');
const analysisMainTitles = document.getElementsByClassName('analysis-main__title');
const analysisMainDescs = document.getElementsByClassName('analysis-main__desc');
const slogan = document.querySelector('.slogan');
const sloganHeading = document.querySelector('.slogan-heading');
const headerSearch = document.querySelector('.header__search');
const headerMenu = document.querySelector(".header-menu");
var isLights = true;
btnLights.addEventListener("click", function(){
    if(isLights){
        btnLights.classList.add('active');
        navbar.classList.add('white-color');
        app.style.background = '#131619';
        header.style.background = '#131619';
        slogan.style.background = '#0F1113';
        iconSearch.style.color = '#fff';
        logo.style.color = '#fff';
        bannerHeading.style.color = '#fff';
        bannerDesc.style.color = '#C2D0DA';
        aboutHeading.style.color = '#fff';
        aboutDesc.style.color = '#C2D0DA';
        featureHeading.style.color = '#fff';
        sloganHeading.style.color = '#fff';
        headerSearch.style.borderColor = '2B2E30';
        headerMenu.style.color = '#fff';
        for(var i=0; i<featureBoxTitles.length; i++){
            featureBoxTitles[i].style.color = '#fff';
        }
        for(var i=0; i<featureBoxDescs.length; i++){
            featureBoxDescs[i].style.color = '#C2D0DA';
        }
        analysisHeading.style.color = '#fff';

        for(var i=0; i<analysisMainTitles.length; i++){
            analysisMainTitles[i].style.color = '#C2D0DA';
        }
        for(var i=0; i<analysisMainDescs.length; i++){
            analysisMainDescs[i].style.color = '#C2D0DA';
        }
        headerMenuNavbar.style.background = '#131619';
        isLights = false;
    }else{
        btnLights.classList.remove('active');
        navbar.classList.remove('white-color');
        app.style.background = '#fff';
        header.style.background = '#fff';
        slogan.style.background = '#F0F6FF';
        logo.style.color = '#000';
        iconSearch.style.color = '#000';
        bannerHeading.style.color = '#000';
        bannerDesc.style.color = '#606093';
        aboutHeading.style.color = '#000';
        aboutDesc.style.color = '#606093';
        featureHeading.style.color = '#000';
        sloganHeading.style.color = '#000';
        headerSearch.style.borderColor = '#eee';
        headerMenu.style.color = '#000';
        for(var i=0; i<featureBoxTitles.length; i++){
            featureBoxTitles[i].style.color = '#000';
        }
        for(var i=0; i<featureBoxDescs.length; i++){
            featureBoxDescs[i].style.color = '#606093';
        }
        analysisHeading.style.color = '#000';

        for(var i=0; i<analysisMainTitles.length; i++){
            analysisMainTitles[i].style.color = '#000';
        }
        for(var i=0; i<analysisMainDescs.length; i++){
            analysisMainDescs[i].style.color = '#606093';
        }

        headerMenuNavbar.style.background = '#fff';
        isLights = true;
    }
})

const headerMenuNavbar = document.querySelector('.header-menu__navbar');
console.log(headerMenu)
var isClose = true;
headerMenu.addEventListener('click', function(){
    if(isClose){
        headerMenu.classList.add('active');
        headerMenuNavbar.style.display = 'block';
        navbar.style.display = 'block';
        headerSearch.style.display = 'block';
        isClose = false;
    }else{
        headerMenu.classList.remove('active');
        headerMenuNavbar.style.display = 'none';
        navbar.style.display = 'none';
        headerSearch.style.display = 'none';
        isClose = true;
    }

})


window.addEventListener('scroll', function(){
    if(window.scrollY>= 90){
        header.style.borderBottom = "thin solid #0000FF";
    }
    else{
        header.style.borderBottom = "none";
    }
})