const { v4: uuidv4 } = require('uuid');

const names = [
    {name: 'léa', id: uuidv4()},
    {name: 'baptiste', id: uuidv4()},
    {name: 'antoine', id: uuidv4()},
    {name: 'clo', id: uuidv4()},
    {name: 'marco', id: uuidv4()},
    {name: 'céline', id: uuidv4()},
    {name: 'timothé', id: uuidv4()},
    {name: 'justine', id: uuidv4()},
    {name: 'puppy', id: uuidv4()},
    {name: 'tita', id: uuidv4()},
    {name: 'yulia', id: uuidv4()},
]

const getMap = (names) => {
    let randomNames = [...names].sort( () => .5 - Math.random() );

    let result = names.map((item, index) => ({
        [item.name]: randomNames[index]
    }))

    while (result.find((item, index) => Object.keys(item)[0] === Object.values(item)[0].name)) {
        randomNames = [...names].sort( () => .5 - Math.random() );
        result = names.map((item, index) => ({
            [item.name]: randomNames[index]
        }))
    }

    return result
}

exports.map = getMap(names)
