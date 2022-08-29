export default{
    name: 'coaches',
    title: 'Edzők',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Név',
            type: 'string',
        },
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
                        title: 'Fő Cím', value: 'h2'
                    }
                ],
            
            }]
        },
        
    ]

}

