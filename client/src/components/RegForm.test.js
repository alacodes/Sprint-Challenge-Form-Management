import React from 'react'
// import App from './App'
import { render, fireEvent } from '@testing-library/react'
import FormikForm from './RegForm'
import '@testing-library/react/cleanup-after-each'

import RegList from './RegList';


describe('<FormikForm />', () => {
    it('renders without crashing', () => {
        render(<FormikForm />);
    });
    it('displays all text', () => {
        const form = render(<FormikForm />);
        form.queryAllByText('Last Name');
    });
    it('<FormikForm /> component should mount and display the form', () => {
        const {getPlaceholderByText} = render(<FormikForm />)
        const username = getPlaceholderByText(/username/i)
        fireEvent.click(username)
    });

    it('<RegList /> should render foods', () => {
        const itemsReturned = [
            {id: 1, name: 'brisket'},
            {id: 2, name: 'ham'},
            {id: 3, name: 'hush puppies'}
        ]
        const comp = render(
            <RegList items={itemsReturned} />
        )
        const items = comp.getAllByTestId('items')
        expect(items).toHaveLength(itemsReturned.length)
    })
    
})



