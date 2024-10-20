import "./Offices.scss";
import { useNavigate } from "react-router-dom";

const Offices = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <nav>
        <button onClick={() => navigate("/")}>Powrót na stronę główną</button>
      </nav>
      <div>
        <h2>Sprzątanie biura</h2>
        <img src="" alt="" />

        <h4>
          Firma sprzątająca &quot;Kings of Clean&quot; oferuje szeroki zakres
          usług sprzątania biur. Główne rodzaje sprzątania biur: - Codzienne
          sprzątanie biur: obejmuje sprzątanie stanowisk pracy, gabinetów, sal
          konferencyjnych, toalet i kuchni. - Generalnie sprzątanie:
          przeprowadzane rzadziej, obejmuje dokładniejsze czyszczenie wszystkich
          powierzchni, mycie okien, pranie dywanów i mebli. - Usługi specjalne:
          sprzątanie po remoncie, generalne sprzątanie przed ważnymi
          wydarzeniami itp. Zalety współpracy z &quot;Kings of Clean&quot;: -
          Doświadczeni i wykwalifikowani pracownicy; - Indywidualne podejście do
          każdego klienta; - Elastyczny harmonogram sprzątania, dostosowany do
          potrzeb Klienta; - Możliwość zawierania długoterminowych umów na
          obustronne korzystnych warunkach. Cennik: - Koszt ustalany jest
          indywidualnie, w zależności od powierzchni biura, częstotliwości
          sprzątania i zakresu potrzebnych prac.
        </h4>
        <h3>
          Cena:
          <br />
          Jednorazowe kompleksowe sprzątanie – od 3 zł/m2
          <br />
          Jednorazowe sprzątanie generalne – od 14 zł/m2
          <br />
          Aby uzyskać więcej informacji, prosimy o bezpośredni kontakt mailowy
          lub telefoniczny. Wycena darmowa!
        </h3>
      </div>
    </div>
  );
};

export default Offices;
