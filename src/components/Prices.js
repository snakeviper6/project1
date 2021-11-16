import React, { Component } from 'react'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import '../App.css'
export default class Prices extends Component {
    render() {
        return (
            <div className="sidesC">
                <PricingTable  highlightColor='#1976D2' className='pricetables'>
                <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='TARIFF' priceText='Internet'>
                <PricingDetail> <b>30 min</b> 5DH</PricingDetail>
                <PricingDetail> <b>1 Heure</b> 10DH </PricingDetail>
                
                <PricingDetail> <b>2 Heures</b> 15DH</PricingDetail>
                
   
      </PricingSlot>
</PricingTable>

<PricingTable  highlightColor='#1976D2'>
                <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='TARIFF' priceText='Impression'>
                <PricingDetail> <b>Impression en noir</b> 2,00 DH</PricingDetail>
                <PricingDetail> <b>Impression en couleur</b> 3,00 DH </PricingDetail>
                
                <PricingDetail> <b>Photocopie</b> 1,00 DH</PricingDetail>
                <PricingDetail> <b>Scanner couleur</b> 3,00 DH</PricingDetail>
                
   
      </PricingSlot>
</PricingTable>
            </div>
        )
    }
}
