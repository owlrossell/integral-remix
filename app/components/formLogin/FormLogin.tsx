import styles from './form-login.module.css';

const FormLogin = () => {
    return (
        <form method='post' className={styles.form}>
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder='Usuario' name='username'/>
            <input type="password" placeholder='Contraseña' name='password'/>
            <button type='submit'>Ingresar</button>
        </form>
    );
}

export default FormLogin;