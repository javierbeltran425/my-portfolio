import axios from "axios";

export const sendemail = async (data) => {

    if (data === undefined || data === null || data === '') return

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_API_URL + 'mails/sendmail',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
}