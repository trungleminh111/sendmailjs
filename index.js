function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,



    };
    const emailValidator = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const serviceID = "service_ki730z7";
    const templateID = "template_qlxs1lt";

    if (params.name === '') {
        alert('vui lòng nhập tên')
        return;
    }
    if (params.email === '') {
        alert('vui lòng nhập email')
        return;
    }
    if (params.message === '') {
        alert('vui lòng nhập nội dung')
        return;
    }
    if (!emailValidator.test(params.email)) {
        alert('Email không hợp lệ');
        return;
    }


    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}

