export default class Constants {
    public static TOKEN_EXPIRE_DAYS: number = 16;
    public static TOKEN_NAME: string = "x-mtg-token";
    public static REFRESH_TOKEN_NAME: string = "x-mtg-refresh-token";
    public static API_URL: String = (window as any).API_DOMAIN;
    // public static API_URL: String = 'https://api.mtg-mm.com';
    public static DATE_FORMAT: any = "yyyy-MM-DD"
}
