import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../utils/emailService";
import { useState } from "react";

const MainPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    sendEmail(form).then((success) => {
      if (success) {
        alert("Wiadomość została wysłana!");
      } else {
        alert("Błąd podczas wysyłania wiadomości.");
      }
    });
  };

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-page">
      <div className="nav-bar">
        <nav>
          <button
            onClick={() => scrollToSection("AboutUs")}
            className="AboutUs"
          >
            O nas
          </button>
          <button onClick={() => scrollToSection("services")} className="Offer">
            Oferta
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="Contact"
          >
            Kontakt
          </button>
        </nav>
      </div>
      <div className="logo">
        <img
          src="photo_5323746555238407518_y-removebg-preview.png"
          alt="KingsOfCleanLogo"
        />
        <h1>
          Nasza firma sprzątająca Kings of Clean oferuje szeroką gamę
          profesjonalnych usług sprzątania Twojego domu i biura. Gwarantujemy
          wysoką jakość, niezawodność i dbałość o szczegóły, aby stworzyć
          komfort i czystość w każdym pomieszczeniu. Nasz zespół składa się z
          doświadczonych fachowców korzystających z nowoczesnego sprzętu i
          bezpiecznych środków czystości. Powierz sprzątanie profesjonalistom i
          ciesz się czystością godną królów!
        </h1>
      </div>
      <h1>Nasze usługi</h1>
      <div id="services" className="services">
        <div>
          <img src="house.png" alt="" />
          <h3>Sprzątanie mieszkań i domów</h3>
          <button onClick={() => navigate("/houses")}>Sprawdź ofertę</button>
        </div>
        <div>
          <img src="office.png" alt="" />
          <h3>Sprzątanie biur</h3>
          <button onClick={() => navigate("/offices")}>Sprawdź ofertę</button>
        </div>
        <div>
          <img src="paint-roller.png" alt="" />
          <h3>Sprzątanie po remoncie</h3>
          <button onClick={() => navigate("/afterrenovation")}>
            Sprawdź ofertę
          </button>
        </div>
        <div>
          <img src="window-cleaning.png" alt="" />
          <h3>Mycie okien i witryn</h3>
          <button onClick={() => navigate("/windows")}>Sprawdź ofertę</button>
        </div>
      </div>
      <div className="services2">
        <div>
          <img src="garage-car.png" alt="" />
          <h3>Sprzątanie garaży i parkingów</h3>
          <button onClick={() => navigate("/garages")}>Sprawdź ofertę</button>
        </div>
        <div>
          <img src="fence.png" alt="" />
          <h3>Sprzątanie terenów zewnętrznych</h3>
          <button onClick={() => navigate("/outside")}>Sprawdź ofertę</button>
        </div>
        <div>
          <img src="sofa.png" alt="" />
          <h3>Pranie mebli</h3>
          <button onClick={() => navigate("/furniture")}>Sprawdź ofertę</button>
        </div>
      </div>
      <div id="AboutUs" className="AboutUs">
        <h1>O nas</h1>
        <div className="Yuliia">
          <img src="IMG_20240804_113919.jpg" alt="" />
          <div className="text-container">
            <h2>Yuliia Balabanova</h2>
            <h3>
              Misją naszej firmy jest utrzymanie Cię w czystości, abyś mógł
              skupić się na tym, co naprawdę ważne.
            </h3>
          </div>
        </div>
        <div className="Vasiliy">
          <img src="unnamed.jpg" alt="" />
          <div className="text-container">
            <h2>Vasyl Fuklev</h2>
            <h3>
              Korzystanie z usług firmy sprzątającej to inwestycja w Twoje
              zdrowie, czas i komfort.
            </h3>
          </div>
        </div>
      </div>

      <div id="contact" className="contact">
        <h1>Kontakt</h1>
        <div className="data">
          <div className="data1">
            <div>
              <img src="" alt="" />
              <h2>Telefon: +48 790 649 582</h2>
            </div>
            <div>
              <img src="" alt="" />
              <h2>E-mail: kingsofclean.pl@gmail.com</h2>
            </div>
            <div>
              <img src="" alt="" />
              <h2>Instagram: _kings_of_clean_</h2>
            </div>
          </div>
          <div className="data2">
            <div>
              <img src="" alt="" />
              <h2>TikTok: kings_of_clean</h2>
            </div>
            <div>
              <img src="" alt="" />
              <h2>NIP: 5214087917</h2>
            </div>
            <div>
              <img src="" alt="" />
              <h2>REGON: 529812205</h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Imię"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Adres e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="Temat wiadomości"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            name="message"
            placeholder="Treść wiadomości..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
