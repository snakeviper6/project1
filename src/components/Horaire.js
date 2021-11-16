import React, { Component } from 'react'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
export default class Prices extends Component {
    render() {
        return (
            <div>
                <PricingTable  highlightColor='#1976D2'>
                <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='Horaire de travail' priceText='Internet'>
                <PricingDetail> <b>Lundi</b>  8:00-12:00</PricingDetail>
                <PricingDetail> <b>Mardi</b  >8:00-12:00</PricingDetail>
                <PricingDetail> <b>mercredi</b>  8:00-12:00</PricingDetail>
                <PricingDetail> <b>Jeudi</b>  8:00-12:00</PricingDetail>
                <PricingDetail> <b>Vendredi</b>  8:00-12:00</PricingDetail>
                <PricingDetail> <b>Week end</b>  FERMÉ</PricingDetail>
                
                
                
   
      </PricingSlot>
</PricingTable>

<PricingTable  highlightColor='#1976D2'>
                <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='TARIFF' priceText='Impression'>
                <PricingDetail> <b></b> 5DH</PricingDetail>
                <PricingDetail> <b>1 Heure</b> 10DH </PricingDetail>
                
                <PricingDetail> <b>2 Heures</b> 15DH</PricingDetail>
                
   
      </PricingSlot>
</PricingTable>
            </div>
        )
    }
}
