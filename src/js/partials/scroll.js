/*window.onload = function () {

    window.Nodes = document.querySelectorAll('.cases_content_item');
    let i = -1;
    let count = 0;
    let flag = false;
    document.addEventListener('scroll', () => {
        if (window.scrollY > Nodes[0].getBoundingClientRect().y) {
            flag = true;
        }
    },
     {
        passive: false
    }
    );

    document.addEventListener('wheel', (event) => {
        if (flag == true) {
            console.log('scroll' + window.scrollY);
            count++;
            console.log(count);
            if (count > 10) {
                if (i < Nodes.length - 1) {
                    i++;
                    Nodes[i].scrollIntoView({
                        behavior: 'smooth'
                    });
                    count = 0;
                }else{
                    flag=false;
                }
                
            }
            event.preventDefault();
            event.stopPropagation();
        }
    }, {
        passive: false
    });
}
*/