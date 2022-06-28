import { GALOY_GRAPHQL_ENDPOINT } from "../../config/index"
import fetch from "node-fetch"

const GALOY_GRAPHQL_ENDPOINT_QUERY = `query{
  wallets(walletCurrency:BTC)
  {
    id
    balance
  }
}`

export const GaloyAccountService = (): IAccountService => {
  const fetchAccounts = async (): Promise<
    Array<{ accountId: string; balance: number }> | Error
  > => {
    try {
      const response = await fetch(GALOY_GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          query: GALOY_GRAPHQL_ENDPOINT_QUERY,
        }),
      })
      const data = await response.json()
      return mapToAccountLiability(data.data.wallets)
    } catch (error) {
      return error
    }
  }
  return { fetchAccounts }
}

const mapToAccountLiability = (
  wallets: {
    id: string
    balance: number
  }[],
): {
  accountId: string
  balance: number
}[] => {
  return wallets.map((wallet) => {
    return {
      accountId: wallet.id,
      balance: wallet.balance,
    }
  })
}
