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



function add(id1, id2, id3, id4, id5, id6) {
    const div1 = document.getElementById(id1);
    const div2 = document.getElementById(id2);
    const div3 = document.getElementById(id3);
    const div4 = document.getElementById(id4);
    const div5 = document.getElementById(id5);
    const div6 = document.getElementById(id6);
    let comparsaDisplay = window.getComputedStyle(div1).getPropertyValue('display');

    if (comparsaDisplay === 'none') {
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div1.style.display = 'flex';
        window.scrollTo({ top: 500, behavior: 'smooth' });
        div1.style.animation = null;
    } else {
        div1.style.animation = 'opacity4 0.3s linear';
        setTimeout(() => {
            div1.style.display = 'none'
        }, 300)
    }
}
