window.onload=function(){
    let Persons= document.querySelectorAll('.team_persons_photo');
    Persons.forEach(node => {
        node.addEventListener('click', (element) => {
            Persons.forEach(node => {
                node.style.width='13%';
            });

            let current=element.target;
            current.style.width="18%";
            current.nextElementSibling.style.width="16%";
            current.previousElementSibling.style.width="16%";
            current.nextElementSibling.nextElementSibling.style.width="14%";
            current.previousElementSibling.previousElementSibling.style.width="14%";
        })
    });
}
