import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'


describe('TermsAndConditions', () => { 
    const renderComponent = () => {
        render(<TermsAndConditions/>)
        return {
            title:screen.getByRole('heading'),
            checkbox:screen.getByRole('checkbox'),
            button:screen.getByRole('button',{name:/submit/i})
        }
    }
    it('should render the correct text and initial state', () => {
        const {title,checkbox,button} = renderComponent()
        
        
        expect(title).toHaveTextContent('Terms & Conditions')
        expect(checkbox).not.toBeChecked()
        expect(button).toBeDisabled()
    })
    it('should be enable the submit button when the terms are unchecked.',async () => {
        const {checkbox,button} = renderComponent()
        //setting up userEvent for user interaction on ui layer.
        const user = userEvent.setup()
        await user.click(checkbox)
        expect(button).toBeEnabled()
        
    })
 })