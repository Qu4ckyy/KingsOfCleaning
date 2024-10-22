import emailjs from "emailjs-com";

var templateParams = {
  to_name: "Odbiorca",
  from_name: "Nadawca",
};

export const sendEmail = (form) => {
  emailjs.init("Nv2FvIaL4S98hz9aA");
  return emailjs
    .sendForm("service_xeramsa", "template_njmt4rt", templateParams, form)
    .then(
      (result) => {
        console.log("Wiadomość została wysłana!", result.text);
        return true;
      },
      (error) => {
        console.error("Błąd podczas wysyłania wiadomości:", error);
        return false;
      }
    );
};
