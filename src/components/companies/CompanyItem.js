import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './CompanyItem.module.css';
import FavoritesContext from '../../store/favourites-context';

function CompanyItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt=""/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from favourites' : 'Add to favourites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default CompanyItem;