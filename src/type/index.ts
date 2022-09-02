export interface Block {
  index: number;
  timestamp: number;
  transactions: Transaction[];
  proof: number;
  previousHash: string;
}

interface Transaction {
  sender: string;
  recipient: string;
  amount: number;
}

export interface GoodsItem {
  id: string | number;
  name: string;
  price: Readonly<string>;
}

export interface UserInfoType {
  id: number | string;
  name: string;
  age: number;
  price: number | string;
  wallet: string | string;
}
