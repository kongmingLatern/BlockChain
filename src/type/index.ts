export interface Block {
  index: number
  timestamp: number
  transactions: Transaction[]
  proof: number
  previousHash: string
}

interface Transaction {
  sender: string
  recipient: string
  amount: number
}
