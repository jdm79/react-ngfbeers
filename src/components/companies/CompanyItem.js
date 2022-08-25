import classes from './CompanyItem.module.css'

function CompanyItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src="" alt=""/>
            </div>
            <div className={classes.content}>
                <h3>Company Name</h3>
                <p>Description</p>
            </div>
            <div className={classes.actions}>
                <button>To favourites</button>
            </div>
        </li>
    )
    
   
}

export default CompanyItem;