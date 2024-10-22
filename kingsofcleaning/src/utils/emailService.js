import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  emailjs.init("Nv2FvIaL4S98hz9aA");
  return emailjs.sendForm("service_xeramsa", "template_njmt4rt", form).then(
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
