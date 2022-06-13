import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById"

export const HeroScreen = () => {
    const navigate = useNavigate()
    const { heroId } = useParams()
    const hero = useMemo(() => getHeroById(heroId),[heroId]);

    const onNavigateBack = () => {
        navigate(-1)
    }

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    const imgPath = `/assets/${heroId}.jpg`
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={imgPath}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <ul className="list-group list-groupflush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Pubisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button 
                className="btn btn-outline-info"
                onClick={onNavigateBack}
                >Regresar</button>
            </div>
        </div>
    )
}