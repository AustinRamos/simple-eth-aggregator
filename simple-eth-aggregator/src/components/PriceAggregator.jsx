import React from "react";
import PriceInfo from "./PriceInfo";

// displays a page header

export default function PriceAggregator(
    {
        PriceInfo,
        off_chain_prices,
        on_chain_prices,
        src_array,
        price_array
    }
) {
  return (
      <div>
  <PriceInfo 
  price_array={off_chain_prices}
   isOffChain={true}
   src_array={src_array}
   >
    
            </PriceInfo>


{/* I WANT THESE TO BE SIDE BY SIDE */}
            <PriceInfo 
  price_array={on_chain_prices}
  isOffChain={false}
  src_array={["Uniswap","Sushi", "Curve"]}
   >
    
            </PriceInfo>


      </div>
  );
}