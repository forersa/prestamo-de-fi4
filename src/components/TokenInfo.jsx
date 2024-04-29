import { useToken } from 'wagmi'
import { ErrorInfo, Title } from './ui'
import PropTypes from 'prop-types'

function TokenInfoItem({ label, value }) {
    return (
        <li className='bg-red-100 p-2 rounded-lg flex items-center gap-1'>
            <span className='font-semibold text-gray-500'>{label}:</span>
            <p className='text.xs sm:text-sm'>{value}</p>
        </li>
    )
}
TokenInfoItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string,
    PropTypes.number]).isRequired
}

export default function TokenInfo() {
    const { data, isError } = useToken({
        address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
      })

      {/*const {totalSupply, ...restData } = data*/}

    return (
        <section className="grid gap-4 bg-blue-100 p-4 shadow w-fit rounded-lg border">
            <Title>Token Info</Title>

            {isError ? (
              <ErrorInfo message>Error: Cargando la información del token.  Prueba de nuevo.</ErrorInfo>
            ): (               
    
            <ul className='grid gap-3'>
                <TokenInfoItem label="Name" value={data?.name} />
                <TokenInfoItem label="Symbol" value={data?.symbol} />
                <TokenInfoItem label="Address" value={data?.address} />
                <TokenInfoItem label="Decimals" value={data?.decimals} />
            </ul>
            )}
        </section>
    )
}