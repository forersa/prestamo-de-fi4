import { useAccount } from "wagmi";
import { LoadingSpinner, Button, ErrorInfo, TextInput, Title } from "../components/ui";
import { Owner } from '../components'

// Make sure that this component is wrapped with ConnectKitProvider
export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <div>Connecting...</div>
  if (isDisconnected) return <div>Disconnected</div>

  return(
    <div className="flex flex-col gap-6">
     <div>Connected Wallet: {address}</div>
     <LoadingSpinner className="h-12 w-12" />
     <div>
       <Button>Comprar Tokens</Button> 
     </div>
     <ErrorInfo message>Error: Internal server error</ErrorInfo>

     <div>
     <TextInput />
     </div>

     <Title>Este es un titulo</Title>

     <Owner />
     </div>
  )
}


