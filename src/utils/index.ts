const preNavigate = (localeActive: string, path: string): string => {
    return `/${localeActive}${path}`;
}

export { preNavigate };
