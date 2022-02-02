export interface NewsTS {
    value: [{
        name: string,
        url: string,
        description: string,
        image: {
            thumbnail: {
                contentUrl: string
            }
        },
        provider: [{
            name: string,
            image: {
                thumbnail: {
                    contentUrl: string
                }
            }
        }]
        datePublished: string
    }]
} 