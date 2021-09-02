export interface AddressType {
  1?: string;
  4?: string;
}

export interface TokenType {
  name: string;
  symbol: string;
  address: AddressType;
  decimals: number;
  icon: string;
}

export interface PoolType {
  tokens: TokenType[];
  address: AddressType;
  lp_token: TokenType;
}
