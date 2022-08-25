import beers from '../data.json'

function CompaniesPage() {
    return (
        <section>
            <h1>Companies Page</h1>
            <ul>
                {beers.map((company) => { 
                    return (
                        <li key={company.id}>
                            <img src={company.image_url}/>;
                            <p>{company.description}</p>
                        </li>
                    )
                })}
            </ul>
            
        </section>
        
        
    )
}

export default CompaniesPage;