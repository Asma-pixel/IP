export function scrollAnimate(params) {
    let navigation = document.querySelectorAll('.hr');
    let anchor
    navigation.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            anchor = e.currentTarget.getAttribute("href").substr(0);
            anchor = document.getElementById(anchor);
            anchor.scrollIntoView({
                behavior:'smooth',
                block: 'start',
            });
        });
    });

}