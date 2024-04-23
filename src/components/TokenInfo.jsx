import { useToken } from 'wagmi'
import { Title } from './ui'

export default function TokenInfo() {
    const { data, isError, isLoading } = useToken({
        address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
      })

    return (
        <section className='bg-blue-100 p-4 shadow w-fit rounded-lg border'>
            <Title>Token Info</Title>
            <ul>
                <li>Symbol: {data?.symbol}</li>
                <li>Name: {data?.name}</li>
                <li>Decimals: {data?.decimals}</li>
                <li>Total Supply: {data?.totalSupply.formatted}</li>
                
            </ul>
            </section>
    )
}