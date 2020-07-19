import React from 'react';
import {connect} from 'react-redux';
import {AddItem} from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item, AddItem}) =>{
    const { name, price, imageUrl} = item
    return (
    <div className ='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className ='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> AddItem(item)} inverted>Add to Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})
export default connect(
    null, 
    mapDispatchToProps
)(CollectionItem);