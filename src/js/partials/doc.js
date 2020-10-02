let doc= document.querySelectorAll('.contr');
doc.forEach(node => {
    node.addEventListener('click', (element) => {
        doc.forEach(node => {
            node.style.width='223px';
        });

        let current=element.target;
        current.style.width="284px";
        
    })
});