import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H8uTxCg9yiEBVG3oB1Cjb5KvlxxRp4k8l3DjbLiJF5QcSzHDvowdU3JNaoSczIkqVd0kpbWNoXp3yDhpVOy7JXk00XUvP2yO8'

   const onToken = token =>{
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckOut 
         label='Pay Now'
         name='UDEE Store'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $$`}
         amount = {priceForStripe}
         panelLabel = 'Pay Now'
         token ={onToken}
         stripeKey ={publishableKey}
        />
    )
}

export default StripeCheckOutButton