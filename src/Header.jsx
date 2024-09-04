import classes from './Header.module.css';
import classNames from 'classnames';

function Header() {
    return(
     <header className={classes.header}>
        <div className={classNames(classes.item)}>Показатель</div>
        <div className={classNames(classes.item, classes.today)}>Текущий день</div>
        <div className={classNames(classes.item)}>Вчера</div>
        <div className={classNames(classes.item)}>Неделя</div>
     </header>
    );
}

export default Header;
