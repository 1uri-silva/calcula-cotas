export function maskCurrency(value: string) {
	let val: string;
	val = value.replace(/\D/g, '');
	val = val.replace(/(\d)(\d{2})$/, '$1,$2');
	val = val.replace(/(?=(\d{3})+(\D))\B/g, '.');
	return val;
}
