import { locale } from "../utils/locale";

export const yup = {
    ...locale,

    required_field: {
        ptBR: 'Campo {{field}} é obrigatório.',
        en: 'Field {{field}} is required.'
    },
    characters_min: {
        ptBR: 'Campo {{field}} deve conter no mínimo {{number}} caracteres.',
        en: 'Fiel {{field}} must contain at least {{number}} characters.'
    },
    characters_max: {
        ptBR: 'Campo {{field}} deve conter no máximo {{number}} caracteres.',
        en: 'Fiel {{field}} must contain at most {{number}} characters.'
    }
}