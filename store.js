let removeCartItemButtons = document.getElementsByClassName('btn-danger');

for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotall();
    })
}

function updateCartTotall(params) {

}