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
            title: 'Galéria Képei', 
            name: 'galeriaimages',
            type: 'array', 
            of: [{
                type: 'image',
            }]
        },
        {
            title: 'Videók Url címe',
            name: 'galeriavideos',
            type: 'array',
            of: [{type: 'url'}]
        }
        
    ]

}

