import "./AfterRenovation.scss";
import { useNavigate } from "react-router-dom";

const AfterRenovation = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <nav>
        <button onClick={() => navigate("/")}>Powrót na stronę główną</button>
      </nav>
      <div>
        <h2>Sprzątanie po remoncie</h2>
        <img src="" alt="" />

        <h4>
          Firma sprzątająca &quot;Kings of Clean&quot; oferuje kompleksowe
          usługi sprzątania po remoncie mieszkań, domów i biur: 1. Usuwanie pyłu
          i zanieczyszczeń: - Dokładne usuwanie pyłu z powierzchni, ścian,
          sufitów i podłóg. - Odkurzanie wszystkich powierzchni, w tym
          trudnodostępnych miejsc. 2. Czyszczenie podłóg: - Mycie podłóg,
          usuwanie plam po farbie i innych materiałach budowlanych. 3.
          Czyszczenie okien i powierzchni szklanych: - Mycie okien wewnątrz i na
          zewnątrz, czyszczenie ram okiennych. - Polerowanie powierzchni
          szklanych, w tym drzwi i przeszkleń. 4. Czyszczenie mebli i sprzętu: -
          Odkurzanie i mycie mebli, czyszczenie sprzętu biurowego i domowego. -
          Usuwanie zabezpieczeń folii i taśmy ochronnej. 5. Utylizacja odpadów:
          - Bezpieczne usuwanie i utylizacja odpadów budowlanych, takich jak
          gruz, opakowania po materiałach budowlanych itp. Zalety sprzątania po
          remoncie z &quot;Kings of Clean&quot;: - Doświadczenie i
          profesjonalizm: Wykwalifikowany zespół z doświadczeniem w sprzątaniu
          po remontach. - Wysokiej jakości sprzęt i środki czystości: Używanie
          specjalistycznych środków czystości i nowoczesnego sprzętu. -
          Indywidualne podejście: Dopasowanie zakresu usług do specyficznych
          potrzeb klienta. - Efektywność: Szybkie i efektywne przywrócenie
          czystości w mieszkaniu, domu lub biurze.
        </h4>
        <h3>
          Cena:
          <br />
          Mieszkania – 10 zł/m2
          <br />
          Dom – 10 zł/m2
          <br />
          Biuro – 13 zł/m2
          <br />
          Okna - od 45 zl
          <br />
          Aby uzyskać więcej informacji i oszacować koszty usług, prosimy o
          bezpośredni kontakt mailowy lub telefoniczny. Wycena darmowa!
        </h3>
      </div>
    </div>
  );
};

export default AfterRenovation;
