export type Navigation = {
    icon: string;
    url: string;
    description: string;
};

export const getNavigation = async (): Promise<Array<Navigation>> => {
    return [
        {
            description: "Home",
            icon: "home",
            url: "/home"
        }, {
            description: "Library",
            icon: "book",
            url: "/library"
        }
    ];
}
