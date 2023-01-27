export enum SelectedPage {
    Home = 'Главная',
    Benefits = 'Обо мне',
    OurClasses = 'Разделы',
    ContactUs = 'Контакты'
}

export type TypeBenefit ={
    icon: JSX.Element,
    title: string,
    description: string
}


export type ClassType = {
    name: string,
    description?: string,
    image: string
}