import {render,screen} from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => { 
    it('should return null if the imageUrls is empty', () => {
        //incase of empty dom
        const {container} =render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement()
    })
    it('should render a list of images', () => {
        const imageUrls:string[] = ['hello','hi']
        render(<ProductImageGallery imageUrls={imageUrls}/>)
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(2)
        imageUrls.forEach((url,index)=>{
            expect(images[index]).toHaveAttribute('src',url)
        })
        
    })
 })