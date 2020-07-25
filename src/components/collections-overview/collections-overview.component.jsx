import React from 'react';
import './collections-overview.styles.scss';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

const collectionsOverview = ({collection}) =>(
    <div className='collections-overview'>
                    {
                collection.map(({id,...otherCollectionsProps} ) =>(
                    <CollectionPreview key ={id} {...otherCollectionsProps} />
                ))
            }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview
})


export default connect(
    mapStateToProps
)(collectionsOverview);