export function useNavigation() {
    const { pathname, replace } = window.location;
    const { pushState } = window.history;

    return {
        pathname,
        replace,
        pushState,
    }
}