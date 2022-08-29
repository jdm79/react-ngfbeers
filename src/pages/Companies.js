import { useState, useEffect } from 'react';

import CompanyList from '../components/companies/CompanyList';

function CompaniesPage() {
    const [isLoading, setIsLoading ] = useState(true);
    const [loadedCompanies, setLoadedCompanies] = useState([]);
    
    useEffect(() => {
        fetch(
            'https://ngfbeers-api-default-rtdb.europe-west1.firebasedatabase.app/companies.json'
        )
            .then(res => {
                return res.json();
            })
            .then((data) => {
                const companies = [];

                for(const key in data) {
                    const company = {
                        id: key,
                        ...data[key]
                    };

                    companies.push(company)
                    console.log(companies)
                }

                setIsLoading(false);
                setLoadedCompanies(companies);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>Companies Page</h1>
            <CompanyList companies={loadedCompanies}/>
        </section>  
    );
}

export default CompaniesPage;