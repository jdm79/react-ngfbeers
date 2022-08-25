import CompanyList from '../components/companies/CompanyList';
import companies from '../data.json'

function CompaniesPage() {
    return (
        <section>
            <h1>Companies Page</h1>
            <CompanyList companies={companies}/>
        </section>
        
        
    )
}

export default CompaniesPage;