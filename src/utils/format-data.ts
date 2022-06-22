export function maskDate(value: number) {
	let val: string;
	val = value.toString().replace(/^(\d{4})(\d{2})(\d)/g, '$1/$2/$3');
	return val;
}
