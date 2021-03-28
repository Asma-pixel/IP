export function descriptionServices(params) {
    let parentDescription = document.querySelectorAll('.description-service li');
    let  description;
    parentDescription.forEach(item => {
        item.addEventListener('click', (e) => {
            description = item.querySelector('p');
            console.log (description);
            description.classList.toggle('open-description');
        });
    });

}