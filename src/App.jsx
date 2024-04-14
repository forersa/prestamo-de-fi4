import { AppLayout } from "./components/ui/layouts"
import { Home } from "./components/pages"
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { config } from './config/wagmi'
import { useAccount } from "wagmi";


function App() {
     return (
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <AppLayout>
            <Home />
          </ AppLayout>
        </ConnectKitProvider>
      </WagmiConfig>
    
  )
}
export default App
