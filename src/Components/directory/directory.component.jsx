import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            section : [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/QKVZSQ3/23.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/9cGw11d/24.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/gDH5nNs/brock.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }
// https://i.ibb.co/R70vBrQ/men.png
// <a href="https://ibb.co/DRFNcWH"><img src="https://i.ibb.co/QKVZSQ3/23.jpg" alt="23" border="0"></a>
// <a href="https://ibb.co/MZ98ttJ"><img src="https://i.ibb.co/9cGw11d/24.jpg" alt="24" border="0"></a>
    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.section.map(({id , title , imageUrl , size}) => (
                        <MenuItem
                            key = {id}
                            title = {title}
                            imageUrl = {imageUrl}
                            size = {size}
                        />
                    ))
                }
            </div>
        )
    } 
}

export default Directory;
