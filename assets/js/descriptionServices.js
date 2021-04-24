export function descriptionServices(params) {
    document.body.addEventListener('click', event => {
        let li = document.querySelectorAll('.description-service li');
        let selected = document.querySelectorAll('.selected');
        let description;
  
        li.forEach(item => {
            description = item.querySelector('p');
            if (event.target == item) {
                item.classList.toggle('selected');
                description.classList.toggle('open-description');
            }
            
        });

        for(let elem of selected) {
            elem.classList.remove('selected');
            elem.querySelector('p').classList.remove('open-description')
        }

    });
}