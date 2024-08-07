import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event'


describe('ExpandableText', () => { 
    const limit = 255
    const longtext = 'a'.repeat(limit+1)
    const truncate = longtext.substring(0,limit)+'...'

    it('should render the text if the text length is within the limit', () => {
        const text = 'hello coder'
        
        render(<ExpandableText text={text}/>)
        const textfull = screen.getByText(text)
        expect(textfull).toHaveTextContent(text)
    })
    it('should show whole longtext when the button is clicked',async () => {
        
        render(<ExpandableText text={longtext}/>)
       
        const button = screen.getByRole('button')
        
        const user = userEvent.setup()
        await user.click(button)
        expect(screen.getByText(longtext)).toBeInTheDocument()
        expect(button).toHaveTextContent(/show less/i)

    })
     it('should show less with truncate when the button is not clicked',async () => {
        render(<ExpandableText text={longtext}/>)
        expect(screen.getByText(truncate)).toBeInTheDocument()
        const button = screen.getByRole('button',{name:/more/i})
        expect(button).toBeInTheDocument()
    })
    it('should collapse the test when the show less button is clicked', async() => {
        render(<ExpandableText text={longtext}/>)
        const user = userEvent.setup()
        const showMoreButton = screen.getByRole('button',{name:/more/i})
        await user.click(showMoreButton)
        const showLessButton = screen.getByRole('button',{name:/less/i})
        await user.click(showLessButton)
        expect(screen.getByText(truncate)).toBeInTheDocument()
    })
 })