export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    categories: [{
        title: string;
    }],
    author: {
        name: string;
        image: string;
    };
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    body: [object];
}