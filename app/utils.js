export const loggedIn = true;

export const  convertStringUrl = (url) => {
    /**
     * This function is converting string url and return URL object
     *
     * @param {string} url - The string url
     *
     * @return {URL} Return converted string url
     */

    return new URL(url);
}