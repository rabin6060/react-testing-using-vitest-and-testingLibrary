import { render,screen } from "@testing-library/react";
import { describe,it,expect } from "vitest";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";


describe('User-Account',()=>{
    it('should display edit button if user is admin', () => {
        const user:User = {
            id:1,
            name:'rabin',
            isAdmin:true
        }
        render(<UserAccount user={user}/>)
        const button = screen.getByRole('button',{name:/edit/i})
        expect(button).toBeInTheDocument()
      //  expect(button).toHaveTextContent(/edit/i)
    })
    it('should display name if there is user logged in', () => {
        const user:User = {
            id:1,
            name:'ram',
        }
        render(<UserAccount user={user} />)
        const div = screen.getByText(user.name)
        expect(div).toHaveTextContent(/ram/)
    })
    it('should not display edit button if the user is not admin', () => {
        const user:User = {
            id:1,
            name:'ram',
        }
        render(<UserAccount user={user}/>)
        const button = screen.queryByRole('button')
        expect(button).not.toBeInTheDocument()
    })
    it('checking getbyrole and querybyrole', () => {
        const user:User = {
            id:1,
            name:'ram',
        }
        render(<UserAccount user={user}/>)
        const heading1 = screen.queryByRole('heading',{name:/tester/i})
        expect(heading1).toBeInTheDocument()
    })
})