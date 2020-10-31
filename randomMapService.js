const { v4: uuidv4 } = require('uuid');

const names = [
    {name: 'lea', id: uuidv4()},
    {name: 'bat', id: uuidv4()},
    {name: 'clo', id: uuidv4()},
    {name: 'marco', id: uuidv4()},
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
