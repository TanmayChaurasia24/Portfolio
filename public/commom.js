const github = document.querySelector('.fa-github');
const linkedin = document.querySelector('.fa-linkedin');
const medium = document.querySelector('.fa-medium');

github.addEventListener('click', (e) => {
    e.preventDefault();
    window.open("https://github.com/TanmayChaurasia24", '_blank');
});

linkedin.addEventListener('click', (e) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/tanmay-kumar-chaurasia-851806245/", '_blank');
});

medium.addEventListener('click', (e) => {
    e.preventDefault();
    window.open("https://medium.com/@kuamrchaurasiatanmay", '_blank');
});
