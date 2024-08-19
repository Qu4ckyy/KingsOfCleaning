import "./Garages.scss"
import { useNavigate } from 'react-router-dom';


const Garages = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <nav>
                <button onClick={() => navigate('/')}>Powrót na stronę główną</button>
            </nav>
            <div>
                <h2>Sprzątanie garaży i parkingów</h2>
                <img src="" alt="" />


                <h4>Firma sprzątająca &quot;Kings of Clean&quot; oferuje kompleksowe usługi sprzątania garaży i parkingów,
                zapewniając czystość i porządek w tych często zaniedbywanych miejscach:
                1. Usuwanie śmieci i odpadów:
                - Zbieranie i usuwanie śmieci, odpadów i pajęczyn.
                - Opróżnianie koszy na śmieci i pojemników na odpady.
                2. Zamiatanie i mycie podłóg:
                - Maszynowe czyszczenie posadzki, usuwanie plam olejowych i innych zabrudzeń.
                Zalety sprzątania garaży i parkingów z &quot;Kings of Clean&quot;:
                - Doświadczenie i profesjonalizm: Wykwalifikowany zespół z doświadczeniem w sprzątaniu garaży i parkingów.
                - Wysokiej jakości sprzęt i środki czystości: Używanie skutecznych środków czystości oraz nowoczesnego sprzętu.
                - Indywidualne podejście: Dopasowanie zakresu usług do specyficznych potrzeb klienta.
                - Efektywność: Szybkie i efektywne sprzątanie, które przywraca garażom i parkingom estetyczny wygląd i funkcjonalność.

                Aby uzyskać więcej informacji i oszacować koszty usług, prosimy o bezpośredni kontakt mailowy lub telefoniczny. Wycena darmowa!</h4>
                <h3>Cena: od 1,5 zł/m2</h3>
            </div>
        </div>
    )
}

export default Garages