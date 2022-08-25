import classes from './CompanyItem.module.css'

function CompanyItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt=""/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To favourites</button>
            </div>
        </li>
    )
    
   
}

export default CompanyItem;