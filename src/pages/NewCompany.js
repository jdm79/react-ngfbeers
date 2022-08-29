import { useHistory } from 'react-router-dom';

import NewCompanyForm from '../components/companies/NewCompanyForm';

function NewCompanyPage() {
    const history = useHistory();

    function onAddCompanyHandler(companyData) {
        fetch(
            'https://ngfbeers-api-default-rtdb.europe-west1.firebasedatabase.app/companies.json',
            {
                method: 'POST',
                body: JSON.stringify(companyData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewCompanyForm onAddCompany={onAddCompanyHandler}/>
        </section>
    )
}

export default NewCompanyPage;