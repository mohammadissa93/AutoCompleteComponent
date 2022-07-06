export type StateModel = {
    id: number;
    abbr: string;
    name: string;
    capital: string;
    lat: string;
    long: string;
}
export type AutoCompleteProps = {
    placeholder: string;
    data: StateModel[];
};