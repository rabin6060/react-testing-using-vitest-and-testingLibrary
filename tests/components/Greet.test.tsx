
import {render,screen} from '@testing-library/react'
import Greet from '../../src/components/Greet'


describe('Greet', () => { 
    it(' should render name if the component has name prop', () => {
        render(<Greet name='rabin'/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/rabin/)
    })
    it('should render login button if name is not provided', () => {
        render(<Greet/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
    })
 })
