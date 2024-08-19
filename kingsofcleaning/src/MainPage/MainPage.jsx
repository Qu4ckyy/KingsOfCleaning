import "./MainPage.scss"
import { useNavigate } from "react-router-dom";

const MainPage = () => {
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
                <button onClick={() => scrollToSection("AboutUs")} className="AboutUs">O nas</button>
                <button onClick={() => scrollToSection("services")} className="Offer">Oferta</button>
                <button onClick={() => scrollToSection("contact")} className="Contact">Kontakt</button>
            </nav>
        </div>
        <div className="logo">
            <img src="photo_5323746555238407518_y-removebg-preview.png" alt="KingsOfCleanLogo" />
            <h1>Nasza firma sprzątająca Kings of Clean oferuje
            szeroką gamę profesjonalnych usług sprzątania
            Twojego domu i biura. Gwarantujemy wysoką
            jakość, niezawodność i dbałość o szczegóły, aby
            stworzyć komfort i czystość w każdym
            pomieszczeniu. Nasz zespół składa się z
            doświadczonych fachowców korzystających z
            nowoczesnego sprzętu i bezpiecznych środków
            czystości. Powierz sprzątanie profesjonalistom i
            ciesz się czystością godną królów!</h1>
        </div>
        <h1>Nasze usługi</h1>
        <div id="services" className="services">
            <div>
                <img src="house.png" alt="" />
                <h3>Sprzątanie mieszkań i domów</h3>
                <button onClick={() => navigate('/houses')}>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="office.png" alt="" />
                <h3>Sprzątanie biur</h3>
                <button onClick={() => navigate('/offices')}>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="paint-roller.png" alt="" />
                <h3>Sprzątanie po remoncie</h3>
                <button onClick={() => navigate('/afterrenovation')}>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="window-cleaning.png" alt="" />
                <h3>Mycie okien i witryn</h3>
                <button onClick={() => navigate('/windows')}>Sprawdź ofertę</button>
            </div>
            </div>
            <div className="services2">
            <div>
                <img src="garage-car.png" alt="" />
                <h3>Sprzątanie garaży i parkingów</h3>
                <button onClick={() => navigate('/garages')}>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="fence.png" alt="" />
                <h3>Sprzątanie terenów zewnętrznych</h3>
                <button onClick={() => navigate('/outside')}>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="sofa.png" alt="" />
                <h3>Pranie mebli</h3>
                <button onClick={() => navigate('/furniture')}>Sprawdź ofertę</button>
            </div>
        </div>
        <div id="AboutUs" className="AboutUs">
            <h1>O nas</h1>
            <div className="Yuliia">
                <img src="IMG_20240804_113919.jpg" alt="" />
            <div className="text-container">
                <h2>Yuliia Balabanova</h2>
                <h3>Misją naszej firmy jest utrzymanie Cię w czystości, abyś mógł skupić się na tym, co naprawdę ważne.</h3>
            </div>
        </div>
        <div className="Vasiliy">
            <img src="unnamed.jpg" alt="" />
            <div className="text-container">
                <h2>Vasiliy Fuklev</h2>
                <h3>Korzystanie z usług firmy sprzątającej to inwestycja w Twoje zdrowie, czas i komfort.</h3>
                </div>
            </div>
        </div>

        
        
        <div id="contact" className="contact">
            <h1>Kontakt</h1>
            <div>
                <img src="" alt="" />
                <h2>ulica</h2>
            </div>
            <div>
                <img src="" alt="" />
                <h2>telefon</h2>
            </div>
            <div>
                <img src="" alt="" />
                <h2>nip</h2>
            </div>
            <div>
                <img src="" alt="" />
                <h2>mail</h2>
            </div>
        </div>
      </div>
    )
}


export default MainPage