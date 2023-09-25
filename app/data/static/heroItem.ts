export interface heroItemType {
    content: string,
    successImages: string[],
}

const heroItem: heroItemType = {
    successImages: [
        'https://i.postimg.cc/3JgY3TQh/hero-1.png',
        'https://i.postimg.cc/Hx7F3wpm/hero-2.png'
    ],
    content: "# Logremos **juntos** tu ingreso\n" +
        "Somos expertos en preparación preuniversitaria, con 28 años de experiencia",
}

export default heroItem;