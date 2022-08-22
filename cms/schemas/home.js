export default{
    name: 'home',
    title: 'Fő Oldal',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Fő Kép',
            type: 'array',
            of: [ {type:'image'} ], /*array of images*/ 
            options: {
                hotspot:true
            }
        },
        {
            name: 'title_1',
            title: 'Hegyi Kecskék',
            type: 'string',
        },
        {
            name: 'galeria',
            title: 'Galéria',
            type: 'array',
            of: [ {type:'file'} ], /*array of images*/ 
        },
        
    ]

}

