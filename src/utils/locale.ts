export const locale = {
    locale(key: string, language: string): string {
        const multiLanguageText = this[key];

        if (multiLanguageText) {
            const translatedText = multiLanguageText[language];

            if (translatedText) {
                return translatedText;
            }
        }
        
        return `Missing translation for ${key}`;
    }
}