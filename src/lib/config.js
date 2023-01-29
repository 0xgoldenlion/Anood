export const DEFAULT_LOCALE = 'en-GB';
export const DEFAULT_MARKET = 'ETH-USD';
export const DEFAULT_LEVERAGE = 50;
export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const BPS_DIVIDER = 10000;
export const DEFAULT_MARKETS_SORT_KEY = ['market', false];
export const DEFAULT_ORDERS_SORT_KEY = ['orderId', true];
export const DEFAULT_POSITIONS_SORT_KEY = ['timestamp', true];
export const DEFAULT_HISTORY_SORT_KEY = ['timestamp', true];
export const DEFAULT_HISTORY_COUNT = 50;
export const DEFAULT_CHAIN_ID = 3141;
export const CHAINDATA = {
/*	31337: {
		label: 'localhost',
		explorer: 'http://localhost:8545',
		rpc: 'http://127.0.0.1:8545/',
		currencyName: 'USDC',
		currencyAddress: '0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f', // USDC address
		currencyDecimals: 6, // USDC
		contracts: {
			Trade: '0x09635F643e140090A9A8Dcd712eD6285858ceBef',
			Pool: '0xc5a5C42992dECbae36851359345FE25997F5C42d',
			Store: '0x7a2088a1bFc9d81c55368AE168C2C02570cB814F',
		},
		alchemy: {
			key: 'testkey',
			network: 'testnetwork',
			wsNetwork: 'ws://localhost:8545/'
		},
		chainlinkSchema: "ethereum-mainnet-arbitrum-1",
		subgraphUrl: "http://localhost:8000/subgraphs/name/cap-subgraph",
		chainName: "Local Testnet",
		chainId: '0x7A69', //chainId number in hexadecimal prefixed by 0x 
		nativeAssetName: "GO",
		nativeAssetSymbol: "GO",
		nativeAssetDecimals: 18,
	},*/
	3141: {
		label: 'hyperspace',
		explorer: 'https://hyperspace.filfox.info/en',
		rpc: 'https://filecoin-hyperspace.chainstacklabs.com/rpc/v1', // for walletconnect
		currencyName: 'USDC',
		currencyAddress: '', // USDC address
		currencyDecimals: 6, // USDC
		contracts: {
			Trade: '0x08b1d6fe01660911b939e9c896ab53aba231f101',
			Pool: '0x3E4CdcDC5E3F46DCe516adB428d107CE62A6D24a',
			Store: '0xf16033d20ADDa47Dc99eA291D0F4C4FeF2fF47af',
		},
		alchemy: {
			key: '',
			network: '',
			wsNetwork: ''
		},
		chainlinkSchema: "",
		chainlinkContracts: {
			'BTC-USD': "",
			'ETH-USD': "",
		},
		subgraphUrl: "https://api.thegraph.com/subgraphs/name/kappacappa/capv4",
		chainName: 'Filecoin hyperspace',
		chainNameShort: 'hyperspace', //for mobile screens
		chainId: '0xc45', //chainId number in hexadecimal prefixed by 0x
		nativeAssetName: 'tFIL',
		nativeAssetSymbol: 'tFIL',
		nativeAssetDecimals: 18,
	},
}
export const CHAINLINK_URL = "https://atlas-postgraphile.public.main.prod.cldev.sh/graphql"