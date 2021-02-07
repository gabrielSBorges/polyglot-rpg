import { fields } from "../translations/fields";

export const locale = {
    locale(key: string, language: string, labels: object | null = null): string {
        const multiLanguageText = this[key];

        if (multiLanguageText) {
            let translatedText = multiLanguageText[language];

            if (translatedText) {
                if (labels) {
                    for (const labelKey of Object.keys(labels)) {
                        if (labelKey === 'field') {
                            const multiLanguageFieldName = fields[labels[labelKey]];

                            if (multiLanguageFieldName && multiLanguageFieldName[language]) {
                                labels[labelKey] = multiLanguageFieldName[language];
                            }
                            else {
                                labels[labelKey] = `[Missing translation for field ${labels[labelKey]}]`;
                            }
                        }
                        
                        translatedText = translatedText.replace(`{{${labelKey}}}`, labels[labelKey]);
                    }
                }

                return translatedText;
            }
        }
        
        return `Missing translation for ${key}`;
    }
}