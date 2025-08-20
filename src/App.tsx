import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPorcentageForm from "./components/TipPorcentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import { InitialState, orderReducer } from "./reducers/order-reducer"

function App() {

  const { order,tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  const [state, dispatch] = useReducer(orderReducer, InitialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        
        <div className="border border-dashed border-slate-400 p-5 rouded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPorcentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : <p className="text-center">La orden esta vacia</p>}
           
        </div>
        
      </main>
    </>
  )
}

export default App
