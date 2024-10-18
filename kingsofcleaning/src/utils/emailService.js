import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  emailjs.init("380bE2oKxn_6aI5B9"); // Podaj swój user_id z EmailJS

  return emailjs.sendForm("service_z267ep9", "template_4bhfdgo", form).then(
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
