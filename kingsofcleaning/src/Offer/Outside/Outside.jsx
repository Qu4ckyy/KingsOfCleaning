import "./Outside.scss"
import { useNavigate } from 'react-router-dom';


const Outside = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <nav>
                <button onClick={() => navigate('/')}>Powrót na stronę główną</button>
            </nav>
            <div>
                <h2>Sprzątanie terenów zewnętrznych</h2>
                <img src="" alt="" />


                <h4>Firma sprzątająca &quot;Kings of Clean&quot; oferuje kompleksowe usługi sprzątania terenów zewnętrznych,
                zapewniając czystość i estetyczny wygląd otoczenia w okółice budynków mieszkalnych, biurowych i
                komercyjnych:
                1. Zamiatanie i usuwanie liści:
                - Zamiatanie chodników.
                - Usuwanie liści, gałęzi i innych odpadów na zielone.
                2. Usuwanie śmieci i odpadów:
                - Zbieranie i usuwanie śmieci oraz innych odpadów.
                - Opróżnianie koszy na śmieci.
                3. Czyszczenie i konserwacja powierzchni:
                - Mycie chodników, podjazdów i innych utwardzonych powierzchni.
                4. Pielęgnacja zieleni:
                - Koszenie trawników, przycinanie krzakow.
                Zalety sprzątania terenów zewnętrznych z &quot;Kings of Clean&quot;:
                - Doświadczenie i profesjonalizm: Wykwalifikowany zespół z doświadczeniem w sprzątaniu terenów zewnętrznych.
                - Wysokiej jakości sprzęt i środki czystości: Używanie skutecznych środków czystości oraz nowoczesnego sprzętu.
                - Indywidualne podejście: Dopasowanie zakresu usług do specyficznych potrzeb klienta.
                - Efektywność: Szybkie i efektywne sprzątanie, które przywraca terenowi zewnętrznemu estetyczny wygląd i funkcjonalność.</h4>
                <h3>Aby uzyskać więcej informacji i oszacować koszty usług, prosimy o bezpośredni kontakt mailowy lub telefoniczny. Wycena darmowa!</h3>
            </div>
        </div>
    )
}

export default Outside