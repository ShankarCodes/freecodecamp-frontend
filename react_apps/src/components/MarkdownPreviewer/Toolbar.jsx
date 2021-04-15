import styles from './Toolbar.module.scss';

const Toolbar = ({children}) =>{
    return <div className={styles.toolbar}>
        {children}
    </div>
}
export default Toolbar;