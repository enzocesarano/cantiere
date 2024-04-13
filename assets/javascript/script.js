const nav = document.getElementById('header');

window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
        nav.style.backgroundColor = 'rgba(20, 29, 29)';
    } else {
        nav.style.background = 'linear-gradient(rgba(20, 26, 29, 0.7), rgba(20, 26, 29, 0)';
    }
});



function add(id1, id2) {
    const div1 = document.getElementById(id1);
    const btn = document.getElementById(id2);

    let comparsaDisplay = window.getComputedStyle(div1).getPropertyValue('display');

    if (comparsaDisplay === 'none') {
        div1.style.display = 'flex';
        window.scrollTo({ top: 350, behavior: 'smooth' });
        div1.style.animation = null;
        btn.classList.add('click');
    } else {
        div1.style.animation = 'opacity4 0.3s linear';
        setTimeout(() => {
            div1.style.display = 'none';
        }, 300);
        btn.classList.remove('click');
    }





    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                div1.style.animation = 'opacity4 0.3s linear';
                setTimeout(() => {
                    div1.style.display = 'none';
                }, 300);
                btn.classList.remove('click');
            } else { }
        });
    });

    observer.observe(div1)
}

const tornaSu = document.getElementById('tornaSuBtn');
let comparsaTornaSu = window.getComputedStyle(tornaSu).getPropertyValue('display');

window.onscroll = function () {
    if (comparsaTornaSu === 'none' && document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        tornaSu.style.display = "block";
    } else {
        tornaSu.style.display = "none";
    }
};

tornaSu.onclick = function (e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
