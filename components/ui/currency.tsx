"use client"

import { useState, useEffect } from 'react'
import { ToCurrency } from '@/lib/utils'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)    
    }, [])

    if(!isMounted) return null
    
    return ( 
        <div className="font-semibold">
            {/* { formatter.format(Number(value)) } */}
            { ToCurrency( Number(value) , 'VND', 'symbol', 0,'vi-VN') }
        </div>
    );
}
 
export default Currency