
const sendMail = async (formData) => {
    try {
        const response = await fetch('http://localhost:8080/send-email', {
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