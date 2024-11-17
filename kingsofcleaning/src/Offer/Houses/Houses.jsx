import "./Houses.scss";
import { useNavigate } from "react-router-dom";

const Houses = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <nav>
        <button onClick={() => navigate("/")}>Powrót na stronę główną</button>
      </nav>
      <div>
        <h2>Sprzątanie mieszkań i domów</h2>
        <img src="" alt="" />

        <h4>
          Sprzątanie mieszkań i domów to szerokie pojęcie, które obejmuje
          różnorodne czynności mające na celu utrzymanie czystości i porządku w
          przestrzeniach mieszkalnych. Poniżej znajduje się lista podstawowych
          zadań, które mogą być częścią takiego sprzątania: czyszczenie
          pajęczyn; czyszczenie na mokro powierzchni (żyrandole, parapety,
          drzwi, meble, włączniki, gniazdka, listwy przypodłogowe, zlewy,
          toalety, wanny lub prysznice (usuwanie kamienia wodnego płatne osobno));
          odkurzanie i mycie podłóg; wyjmowanie śmieci
        </h4>
        <h3>
          Cena: Sprzątanie mieszkania - 6 zł/m2 (od 220 zł)
          <br />
          Sprzątanie domu - od 5 zł/m2
        </h3>
        <br />
        <h4>
          Co możesz zamówić dodatkowo: - Mycie piekarnika - 70 zł
          <br />
          - Mycie okapu - od 20 zł
          <br />
          - Sprzątanie wnętrza szafek kuchennych - 70 zł
          <br />
          - Mycie naczyń - 40 zł/g
          <br />
          - Czyszczenie lodówki - 60 zł
          <br />
          - Mycie mikrofalówki - 20 zł
          <br />
          - Sprzątanie balkonu - 45 zł
          <br />
          - Prasowanie - 70 zł/g
          <br />
          - Porządek i czyszczenie wnętrza szafy - 60 zł/g
          <br />
          - Przenoszenie mebli - 70 zł
          <br />
          - Mycie zmywarki - 45 zł
          <br />
          - Usuwanie kamienia wodnego - od 50 zł
          <br />
          - Mycie żyrandola sufitowego - od 30 zł
          <br />
          - Usuwanie pleśni - od 100 zł
          <br />
          - Mycie rolet - od 40 zł
          <br />
          - Pranie zasłon - od 150 zł
          <br />
          - Czyszczenie fug - 15 zł/m2
          <br />
        </h4>
      </div>
    </div>
  );
};

export default Houses;
