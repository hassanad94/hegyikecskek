export default{
    name: 'reviews',
    title: 'Vélemények',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Név',
            type: 'string',
        },
        {
            name: 'review',
            title: 'Vélemény',
            type: 'text',
        },
        {
            name: 'hero',
            title: 'Profil Kép',
            type: 'image',
            options: {
                hotspot:true
            },
        }
        
    ]

}

