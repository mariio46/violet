export type Children = {
    children: React.ReactNode;
};

export type AuthenticatedUserType = {
    id?: string;
    name?: string;
    email: string;
    image?: string;
    randomKey?: string;
};
