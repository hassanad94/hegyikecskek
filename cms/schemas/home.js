export default{
    name: 'home',
    title: 'Fő oldal',
    type: 'document',
    fields: [
        {
            name: 'hero',
            title: 'Fő Kép',
            type: 'image', /*array of images*/ 
            options: {
                hotspot:true
            }
        },
        {
            title: 'Bemutatkozó Szöveg', 
            name: 'title_1',
            type: 'array', 
            of: [{
                type: 'block',
                styles: [
                    {
                        title: 'Normal', value: "normal",
                        title: 'Fő Cím', value: 'h1'
                    }
                ],
            
            }]
        },
        {
            name: 'galeria',
            title: 'Galéria',
            type: 'array',
            of: [ {type:'file'} ], /*array of images*/ 
        },
        
    ]

}

