import { v4 as uuidv4 } from 'uuid';

function generateUniqueId(existingIds) {
	let uniqueId;
	do {
		uniqueId = uuidv4();
	} while (existingIds.includes(uniqueId));
	return uniqueId;
}

export { generateUniqueId };
