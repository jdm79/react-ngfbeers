import { useContext } from "react";

import FavoritesContext from "../store/favourites-context";
import CompanyList from "../components/companies/CompanyList";

function FavouritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>No favourites yet.</p>
    } else {
        content = <CompanyList companies={favoritesCtx.favorites}/>

    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    )
}

export default FavouritesPage;