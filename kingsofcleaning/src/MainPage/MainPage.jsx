import "./MainPage.scss"

const MainPage = () => {
    return (
      <div className="main-page">
        <div className="nav-bar">
            <nav>
                <button>O nas</button>
                <button>Oferta</button>
                <button>Referencje</button>
                <button>Kontakt</button>
            </nav>
        </div>
        <div className="logo">
            <img src="" alt="KingsOfCleanLogo" />
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
        <div className="services">
            <h1>Nasze usługi</h1>
            <div>
                <img src="" alt="" />
                <h4>Sprzątanie mieszkań i domów</h4>
                <button>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="" alt="" />
                <h4>Sprzątanie biur</h4>
                <button>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="" alt="" />
                <h4>Sprzątanie po remoncie</h4>
                <button>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="" alt="" />
                <h4>Mycie okien i witryn</h4>
                <button>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="" alt="" />
                <h4>Sprzątanie garaży i parkingów</h4>
                <button>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="" alt="" />
                <h4>Sprzątanie terenów zewnętrznych</h4>
                <button>Sprawdź ofertę</button>
            </div>
            <div>
                <img src="" alt="" />
                <h4>Pranie mebli</h4>
                <button>Sprawdź ofertę</button>
            </div>
        </div>
        <div className="AboutUs">
            <img src="" alt="" />
            <h2>Co musisz o nas wiedzieć?</h2>
            <div>
                <img src="IMG_20240804_113919.jpg" alt="" />
                <h3>Misją naszej firmy jest utrzymanie Cię w czystości, abyś mógł skupić się na tym, co naprawdę ważne.</h3>
            </div>
            <div>
                <img src="photo_5879684588001937033_y.jpg" alt="" />
                <h3>Korzystanie z usług firmy sprzątającej to inwestycja w Twoje zdrowie, czas i komfort.</h3>
            </div>
        </div>
        
        <div className="refrences">
            <div>
                <h2>cytat</h2>
                <h2>osoba</h2>
            </div>
            <div>
                <h2>cytat</h2>
                <h2>osoba</h2>
            </div>
            <div>
                <h2>cytat</h2>
                <h2>osoba</h2>
            </div>
        </div>
        <div className="contact">
            <h1>Kontakt</h1>
            <h1>nazwa firmy</h1>
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