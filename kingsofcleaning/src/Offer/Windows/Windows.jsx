import "./Windows.scss"
import { useNavigate } from 'react-router-dom';


const Windows = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <nav>
                <button onClick={() => navigate('/')}>Powrót na stronę główną</button>
            </nav>
            <div>
                <h2>Mycie okien i witryn</h2>
                <img src="" alt="" />

                
                <h4>Firma sprzątająca &quot;Kings of Clean&quot; oferuje profesjonalne usługi mycia okien i witryn, zapewniając
                krystaliczną czystość i doskonały wygląd Twoich powierzchni szklanych:
                1. Mycie okien wewnątrz i na zewnątrz:
                - Dokładne mycie szyb, ram okiennych i parapetów.
                - Usuwanie kurzu, brudu, smug i odcisków palców.
                2. Czyszczenie witryn sklepowych:
                - Profesjonalne mycie witryn sklepowych, zarówno wewnątrz, jak i na zewnątrz.
                - Usuwanie plam, śladów po kleju, naklejkach i innych zabrudzeń.
                3. Czyszczenie trudno dostępnych miejsc:
                - Mycie okien na dużej wysokości przy użyciu profesjonalnego sprzętu.
                - Dostęp do trudno dostępnych miejsc dzięki wysięgnikom i drabinom.
                4. Mycie rolet:
                - Usuwanie kurzu, brudu, plam i innych zanieczyszczeń
                Zalety mycia okien i witryn z &quot;Kings of Clean&quot;:
                - Doświadczenie i profesjonalizm: Wykwalifikowany zespół z doświadczeniem w myciu okien i witryn.
                - Wysokiej jakości sprzęt i środki czystości: Używanie skutecznych środków czystości oraz nowoczesnego sprzętu.
                - Indywidualne podejście: Dopasowanie zakresu usług do specyficznych potrzeb klienta.</h4>
                <h3>Cena:
                Mycie okien - od 40 zł
                Mycie okien po remoncie - od 55 zł
                Aby uzyskać więcej informacji i oszacować koszty usług, prosimy o bezpośredni kontakt mailowy lub telefoniczny. Wycena darmowa!</h3>
            </div>
        </div>
    )
}

export default Windows