import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import { HeroList } from "../hero/HeroList"

export const MarvelScreen = () => {
  
    return (
        <div>
            <h1>Marvel Screen</h1>
            <HeroList
                publisher={'Marvel Comics'}
            />
        </div>
    )
}