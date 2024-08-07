import {render,screen} from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'

describe('UserList', () => { 
    it('should display no users available when there is no users', () => {
        const users:User[] = []
        render(<UserList users={users}/>)
        expect(screen.getByText(/no users/i)).toBeInTheDocument()
    })
    it('should renders user list if there are more users', () => {
        const users:User[] = [
            {
                id:1,
                name:'ram'
            },
            {
                id:2,
                name:'shyam'
            }
        ]
        render(<UserList users={users}/>)
        users.forEach(user=>{
           const link = screen.getByRole('link',{name:user.name})
           expect(link).toBeInTheDocument()
           expect(link).toHaveAttribute('href',`/users/${user.id}`)
        })
    })
 })