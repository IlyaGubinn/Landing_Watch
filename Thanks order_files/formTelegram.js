

const TELEGRAM_BOT_TOKEN = '6317941476:AAFmHKwIqZEvSj-EqSmNRfYvcNx2RYTALls';
const TELEGRAM_CHAT_ID = '@LandingWatch';
const API =`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

async function sendEmailTelegram(event){
    // event.preventDefault()
    const form = event.target;
    const formBtn = document.querySelector('.order_form_button');
    const formSendResult = document.querySelector('form_send-result');
    formSendResult.textContent = '';
    

    const formData = new FormData(form);
    const formDateObject = Object.fromEntries(formData.entries());
    const { name,phone } = Object.fromEntries(new FormData(form).entries())
    const text = `Замовлення:
    ім'я : ${name},
    Номер телефону : ${phone}.`;


    try {
        const response = await fetch(API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                chat_id:TELEGRAM_CHAT_ID,
                text,
            })
          });
          if(response.ok){
            form.reset
          }else {
            throw new Error(response.statusText)
          }
    } catch (error) {
        console.error(error)

    }finally{
        formBtn.textContent(Оформити замовлення)
    }




}
