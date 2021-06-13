document.addEventListener('DOMContentLoaded', function Validation() {
    const inputQuestion = document.getElementById('login__email');
    const form = document.querySelector('form.login');
    const btnSubmit = document.querySelector('.login-actions-container .button');
    const modalAreYouSure = document.querySelector('.are-you-sure.modal');
    const modalMessage = document.querySelector('.message');
    let countOpportunities = 1;

    if(inputQuestion)   inputQuestion.addEventListener('input', onInput);
    if(form)            form.addEventListener('submit', onSubmit);
    
    function onSubmit(e) {
        e.preventDefault();
        $(modalAreYouSure)
            .modal({
                onApprove: validateAnswer
            })
            .modal('show');
    }

    function onInput(e) {
        let date = e.target.value;

        if(validateDate(date)) {
            btnSubmit.removeAttribute('disabled');
        } else {
            btnSubmit.setAttribute('disabled', true);
        }
    }

    function validateDate(str) {
        const dateExpression = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[0-2])$/;
        str = str.replace(/\s/, '');
        return dateExpression.test(str);
    }

    function validateAnswer() {
        const correctDay = 13;
        const correctMonth = 3;

        const [day, month] = inputQuestion.value.split(/[\-/.]/);

        console.log(month, day)
        if(correctMonth === month * 1 && correctDay=== day * 1) {
            const message = 'PERDISTE A TU FUTURO NOVIO';
            const iconClass = 'ambulance';

            $(setModalMessage(message, iconClass))
                .modal({
                    onApprove: ()=> {
                        const message = 'Era broma, la respuesta era correcta (Te quiero)';
                        const iconClass = 'heart';
                        setTimeout(() => {
                            $(setModalMessage(message, iconClass))
                            .modal({
                                onApprove: ()=>location.assign('/happy-birthday.html')
                            })
                            .modal('show');
                        }, 0);
                    }
                })
                .modal('show');
        } else if (countOpportunities > 0) {
            countOpportunities--;
            const message = `Tenés una oportunidad más para recuperar a tu futuro novio`;
            const iconClass = 'meh outline';

            $(setModalMessage(message, iconClass))
                .modal('show');
        } else if (countOpportunities === 0) {
            const message = `Tenemos que hablar!!`;
            const iconClass = 'ambulance';

            $(setModalMessage(message, iconClass))
                .modal({
                    onApprove: () => location.assign('/happy-birthday.html')
                })
                .modal('show');
        }
    }

    function setModalMessage(message, iconClass) {
        const icon = modalMessage.querySelector('.header i');
        const content = modalMessage.querySelector('.content');
        icon.className = `${iconClass} icon`;
        content.innerHTML = message;

        return modalMessage;
    }
});


