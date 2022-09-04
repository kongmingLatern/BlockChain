import type { Block } from '@/type'

export class BlockChain {
  private chain: Block[]
  constructor(chain: Block[]) {
    this.chain = chain
  }
}
