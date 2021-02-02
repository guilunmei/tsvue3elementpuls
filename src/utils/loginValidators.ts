import { ref } from 'vue';
interface email {
    email: string;
    passWord: string;
}
interface pass{
        email: ({
            required: boolean;
            message: string;
            trigger: string;
            type?: undefined;
        } | {
            type: string;
            message: string;
            trigger: string[];
            required?: undefined;
        })[];
        passWord: ({
            required: boolean;
            message: string;
            trigger: string;
            min?: undefined;
            max?: undefined;
        } | { })[];   
}
export const loginFormData = ref<email>({
    email: '',
    passWord: ''
})
export const loginFormRules = ref<pass>({
    email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
        }
    ],
    passWord: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '请输入3-12位密码', trigger: 'blur' }
    ]
})