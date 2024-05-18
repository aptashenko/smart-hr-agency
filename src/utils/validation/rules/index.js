import {maxLength, minLength, required} from "@vuelidate/validators";
export const validationRules = {
    name: {
        value: {
            required,
            minLength: minLength(1),
            maxLength: maxLength(64)
        }
    },
    surname: {
        value: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(20)
        }
    },
    position: {
        value: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(20)
        }
    },
    contact: {
        value: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(30)
        }
    },
    message: {
        value: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(1500)
        }
    }
}
