import { prestamoDeFi4ABI } from '../contracts/ABIs'
import { Button, TexInput, Title }  from './ui'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { useState, useEffect } from 'react'
import { parseEther } from 'viem/utils'
import { toast } from 'react-hot-toast'

export default function TokenTransferForm() {
    const [to, setTo] = useState('')
    const [amount, setAmount] = useState('')

    const { config } = usePrepareContractWrite({
        address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
        abi: prestamoDeFi4ABI,
        functionName: 'transfer',
        enabled: to && amount > 0,
        args: [to, parseEther(amount)]
    })

    const { data, write } = useContractWrite(config)

    const {
        isLoading: isTrasactionLoading,
        isSuccess: isTransactionSuccess,
        isError: isTransactionError
    } = useWaitForTransaction ({
        hash: data?.hash
    })

    const handleToInputChange = (event) => {
        setTo(event.target.value)
    }

    const handleAmountInputChange = (event) => {
        setAmount(event.target.value)
    }

    useEffect(() => {
        if (isTransactionSuccess) {
            toast.success('La transaccion se ha completado con exito')
            setTo('')
            setAmount('')
        }
        if (isTransactionError) {
            toast.error('La transaccion ha fallado')
        }
    }, [isTransactionSuccess, isTransactionError])

    return (
        <section className="bg-white p-4 border shadow rounded-lg text-sm space-y-2"/>
           <Title>Token Transfer Form</Title>
    )
}

