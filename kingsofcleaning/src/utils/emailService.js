import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  emailjs.init("TWOJE_USER_ID"); // Podaj swój user_id z EmailJS

  return emailjs.sendForm("service_z267ep9", "TWOJE_TEMPLATE_ID", form).then(
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
