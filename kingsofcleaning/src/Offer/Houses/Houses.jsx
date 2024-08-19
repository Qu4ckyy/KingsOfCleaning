import "./Houses.scss"
import { useNavigate } from 'react-router-dom';


const Houses = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <nav>
                <button onClick={() => navigate('/')}>Powrót na stronę główną</button>
            </nav>
            <div>
                <h2>Sprzątanie mieszkań i domów</h2>
                <img src="" alt="" />


                <h4>Sprzątanie mieszkań i domów to szerokie pojęcie, które obejmuje różnorodne czynności mające na celu
                utrzymanie czystości i porządku w przestrzeniach mieszkalnych. Poniżej znajduje się lista podstawowych
                zadań, które mogą być częścią takiego sprzątania:
                - Czyszczenie pajęczyn
                - Czyszczenie na mokro powierzchni (żyrandole, parapety, drzwi, meble, włączniki, gniazdka, listwy
                przypodłogowe, zlewy, toalety, wanny lub prysznice (usuwanie kamienia wodnego płatne osobno)
                - Odkurzanie i mycie podłóg
                - Wyjmowanie śmieci</h4>
                <h3>Cena:
                Sprzątanie mieszkania - 8 zł/m2 (od 220 zł)
                Sprzątanie domów - 10 zł/m2</h3>
                <h4>Co możesz zamówić dodatkowo:
                - Mycie piekarnika - 65 zł
                - Mycie okapu - 60 zł
                - Sprzątanie wnętrza szafek kuchennych - 70 zł
                - Mycie naczyń - 40 zł/g
                - Czyszczenie lodówki - 60 zł
                - Mycie mikrofalówki - 20 zł
                - Sprzątanie balkonu - 45 zł
                - Prasowanie - 70 zł/g
                - Porządek i czyszczenie wnętrza szafy - 65 zł/g
                - Przenoszenie mebli - 85 zł
                - Mycie zmywarki - 45 zł
                - Usuwanie kamienia wodnego - od 50 zł
                - Mycie żyrandola sufitowego - od 30 zł
                - Usuwanie pleśni - od 100 zł
                - Mycie rolet - od 50 zł
                - Pranie zasłon - od 150 zł
                - Czyszczenie fug - 15 zł/</h4>
            </div>
        </div>
    )
}

export default Houses