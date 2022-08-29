import CompanyItem from './CompanyItem';
import classes from './CompanyList.module.css'

function CompanyList(props) {
    return (
        <ul className={classes.list}>
            {props.companies.map(company => 
                <CompanyItem 
                    key={company.id} 
                    id={company.id} 
                    image={company.image}
                    title={company.title}
                    description={company.description}
                />        
            )}
        </ul>
    )
}

export default CompanyList;