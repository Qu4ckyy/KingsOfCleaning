import "./Furniture.scss";
import { useNavigate } from "react-router-dom";

const Furniture = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <nav>
        <button onClick={() => navigate("/")}>Powrót na główną</button>
      </nav>
      <div>
        <h2>Pranie mebli</h2>
        <img src="" alt="" />

        <h4>
          Firma sprzątająca &quot;Kings of Clean&quot; oferuje profesjonalne
          usługi czyszczenia chemicznego mebli, dywanów i materacy: 1.
          Czyszczenie chemiczne mebli: - Sofy, fotele i krzesła: Usuwanie plam,
          kurzu i brudu z tapicerki, w tym z materiałów takich jak skóra i różne
          rodzaje materiałów. - Metody: Stosowanie specjalistycznych środków
          czyszczących, które są dostosowane do typu materiału. 2. Czyszczenie
          chemiczne dywanów: - Dywany i wykładziny: Usuwanie plam, brudu, kurzu
          oraz nieprzyjemnych zapachów z dywanów i wykładzin. - Metody:
          Zastosowanie szamponów i detergentów chemicznych oraz maszyn do
          czyszczenia na mokro. 3. Czyszczenie chemiczne materacy: - Materace:
          Usuwanie plam, kurzu, roztoczy i alergenów z materacy. - Metody:
          Stosowanie specjalistycznych środków czyszczących i sprzętu do
          ekstrakcji, który wnikliwie czyści i odświeża materac. Zalety
          czyszczenia chemicznego z &quot;Kings of Clean&quot;: - Skuteczność:
          Profesjonalne środki i techniki, które skutecznie usuwają zabrudzenia
          i plamy, poprawiając wygląd i higienę. - Bezpieczeństwo: Używanie
          środków czyszczących bezpiecznych dla materiałów oraz zdrowia
          użytkowników. - Doświadczenie: Wykwalifikowany zespół z doświadczeniem
          w czyszczeniu różnych typów powierzchni. - Szybkość i efektywność:
          Szybkie i efektywne usuwanie zanieczyszczeń, co pozwala na
          minimalizację przestojów i niedogodności.
        </h4>

        <h3>
          Cena:
          <br />
          Pranie fotela – od 60 zł
          <br />
          Pranie taboretów – od 25 zł
          <br />
          Pranie dywanów – od 15 zł/m2
          <br />
          Pranie wykładziny – od 12 zł/m2
          <br />
          Pranie jednoosobowego materaca – od 200 zł
          <br />
          Pranie dwuosobowego materaca – od 250 zł
          <br />
          Pranie kanapy – od 200 zł
          <br />
          Minimalne zamówienie pralni chemicznej od 250zł Aby uzyskać więcej
          informacji prosimy o bezpośredni kontakt mailowy lub telefoniczny.
          Wycena darmowa!
        </h3>
      </div>
    </div>
  );
};

export default Furniture;
