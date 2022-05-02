import * as moment from 'moment'

class Block {
	private data: BlockData; // each data has its unique index increasing by one
	private next: any;
	private prev: any;

	constructor(data: any, next: any = null, prev: any = null){
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

interface BlockData {
	index: number;
	name: string;
	lastname: string;
	walletAmount: number;
	spent: number;
	currency: string;
	updated: string | boolean;
}
class Data {
	public index: number;
	private name: string;
	private lastname: string;
	private walletAmount: number;
	private spent: number;
	private currency: string;
	public updated: string | boolean;

	constructor(data: BlockData) {
		this.index = data.index;
		this.name = data.name;
		this.lastname= data.lastname;
		this.walletAmount = data.walletAmount;
		this.spent = data.spent;
		this.currency = data.currency;
		this.updated = data.updated;
	}
}


class BlockChain {
	private head: any;
	private tail: any;
	private length: number = 0;

	insertNode(data:BlockData): void {
		let block_data = new Data(data);
		// Set the index of the current Block
		block_data.index = this.length + 1;
		block_data.updated = false;

		if (this.head == null) {
			// Add new Block
			this.head = new Block(block_data);
			this.tail = this.head;
			// Length increased
			this.length ++;

		}else {
			this.tail.next = new Block(block_data, null, this.tail);
			this.tail = this.tail.next;
			// Length increased
			this.length ++;;
		}

	}
	updateNode(index: number, data: any) {
		let current: any = this.head;
		let previous: any = null;

		let block_data = new Data(data);
		// Set the updated of the current Block
		block_data.updated = moment().format();

		if (index  == this.head.data.index) {
			// Keep the current index
			const index: number = current.data.index;
			block_data.index = index;

			// Save Changes
			this.head = new Block(block_data, this.head.next, null);
		}
		else {
			while (current) {

				if (current.data.index != index) {
					previous = current; 
					current = current.next;
				}
				else {
					// Keep the current index
					const index: number = previous.next.data.index;
					block_data.index = index;

					// Save Changes
					previous.next = new Block(block_data, current.next, previous);
					break;
				}
			}
		}
	}
	insertNodeAfter(index: number, data: BlockData) {
		let current: any = this.head;
		let previous: any = 0;

		let block_data = new Data(data);
		// Set the index of the current Block

		while (current) {
			if (current.data.index != index) {
				previous = current;
				current = current.next;
			}
			else {
				const oldNextNode = current.next;
				const oldPrevNode = current.next.prev;

				block_data.index = current.next.data.index;
				// see below
				current.next = new Block(block_data, current.next, current);
				current.next.next.prev = new Block(block_data, current.next, current);

				this.length++;
				break;
			}
		}

	}
	removerNode(index: number) {
		let current: any = this.head;
		let previous: any = null;

		if (index == 1) {
			this.head = this.head.next;
		}
		else {
			while (current != null){
				if (current.data.index != index) {
					console.log(index)
					previous = current;
					current = current.next;
				}
				else {
					previous.next = current.next;
					current.next.prev = previous;
					break;
				}
			}
		}
	}

	blocks(): BlockData[] | any {
		let current: any = this.head;
		let blocks: BlockData[] = [];

		while (current) {
			blocks.push(current.data);
			current = current.next;
		}
		return blocks;
	}
}



const BlockChainInstance: any = new BlockChain();


BlockChainInstance.insertNode({
	name: "Mouad",
	lastname: "Taoussi",
	walletAmount: 5544,
	spent: 274,
	currency: "MAD"
});
BlockChainInstance.insertNode({
	name: "Alan",
	lastname: "Smith",
	walletAmount: 4542,
	spent: 422,
	currency: "USD"
});
BlockChainInstance.insertNode({
	name: "Walid",
	lastname: "Bendaou",
	walletAmount: 7868,
	spent: 397,
	currency: "MAD"
});
BlockChainInstance.insertNode({
	name: "Mike",
	lastname: "Traversy",
	walletAmount: -7577,
	spent: 8985,
	currency: "GBP"
});
BlockChainInstance.insertNode({
	name: "Jhone",
	lastname: "Doe",
	walletAmount: 7545,
	spent: 788,
	currency: "CHYW"
});
BlockChainInstance.insertNode({
	name: "Will",
	lastname: "Cave",
	walletAmount: 5877,
	spent: 211,
	currency: "JY"
});

BlockChainInstance.updateNode(1, {
	name: "Json",
	lastname: "Cave",
	walletAmount: 5877,
	spent: 211,
	currency: "AUD"
});
BlockChainInstance.insertNodeAfter(3, {
	name: "diguheriugejgoirjgeoigeroijg",
	lastname: "Cave",
	walletAmount: 5877,
	spent: 211,
	currency: "AUD"
});
BlockChainInstance.removerNode(2)
// BlockChainInstance.removerNode(2)
// BlockChainInstance.removerNode(3)
// BlockChainInstance.removerNode(4)
// BlockChainInstance.removerNode(5)
// BlockChainInstance.removerNode(6)
console.log(BlockChainInstance.blocks());

// console.log(previous.next)
// console.log(current)
// current.next = new Block(block_data, current.next, previous);
// current.next.next.prev = new Block(block_data, current.next, previous);