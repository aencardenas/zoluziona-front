
const sendMail = async (formData) => {
    try {
        const response = await fetch('https://zoluziona.top/gateway/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return {success: true};
        } else {
            return {success: false, error: 'Error al enviar el correo'}
        }
    } catch (error) {
        return {success: false, error: 'Error al enviar el correo'}
    }
}

export {sendMail};