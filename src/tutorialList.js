import { faker } from "@faker-js/faker";
const tutorialList = [
	{
		key: 0,
		image: faker.image.image(300, 200, true),
		tutorial: faker.lorem.words(3),
		description: faker.lorem.words(5),
		grade: faker.datatype.number({ min: 0, max: 5 }),
		name: faker.name.fullName(),
	},
	{
		key: 1,
		image: faker.image.image(300, 200, true),
		tutorial: faker.lorem.words(3),
		description: faker.lorem.words(5),
		grade: faker.datatype.number({ min: 0, max: 5 }),
		name: faker.name.fullName(),
	},
	{
		key: 2,
		image: faker.image.image(300, 200, true),
		tutorial: faker.lorem.words(3),
		description: faker.lorem.words(5),
		grade: faker.datatype.number({ min: 0, max: 5 }),
		name: faker.name.fullName(),
	},
];
export default tutorialList;
