const userOne: {
    company: 'Programming Hero', // Literal type: company name can not be changed
    readonly name: string, // can be read but can not be changed
    age: number,
    isMarried: boolean,
    wife?: string
} = {
    company: 'Programming Hero',
    name: 'Sajid',
    age: 34,
    isMarried: true,
    wife: 'Bilkis'
}

// userOne.company = 'Programming Hero BD';
