export function descriptionServices(params) {
    let parentDescription = document.querySelectorAll('.description-service li');
    let  description;
    parentDescription.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('active');
            description = item.querySelector('p');
            console.log (e.target.className);
            description.classList.toggle('open-description');
        });
    });

}